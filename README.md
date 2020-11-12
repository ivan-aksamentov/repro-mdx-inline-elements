# repro-mdx-inline-elements

Reproduces issue [mdx-js/mdx#1327](https://github.com/mdx-js/mdx/issues/1327) "MDX is not compatible with @babel/plugin-transform-react-inline-elements".


### Subject of the issue

When combined with [`@babel/plugin-transform-react-inline-elements`](https://babeljs.io/docs/en/babel-plugin-transform-react-inline-elements), MDX often not picking up the custom components provided through `MDXProvider` and renders the default components instead. This is probably due to heavy optimizations this babel plugin performs on react components. Removing the plugin from babel configuration fixes the issue.

This plugin is only typically used in production and so the problem will not manifest during development or in tests. Therefore this breakage may slip unnoticed to production. In fact, I just shipped [a broken version](https://github.com/nextstrain/nextclade/blob/996d58fb4ea2ba6d5c7a6c7ccd3fb63dae976094/packages/web/babel.config.js#L67) yesterday.

Wouldn't it be nice for MDX to support configurations with this babel plugin?


### Your environment

*   **OS**: Ubuntu 20.04
*   **Packages**: 
    ```json
    {
      "dependencies": {
        "@mdx-js/react": "1.6.21",
        "@next/mdx": "10.0.1",
        "next": "10.0.1",
        "react": "16.14.0",
        "react-dom": "16.14.0",
        "styled-components": "5.2.1"
      },
      "devDependencies": {
        "@babel/plugin-transform-react-inline-elements": "7.12.1",
        "@mdx-js/loader": "1.6.21",
        "prettier": "2.1.2"
      }
    }
    ```
*   **Env**: <!-- Version of node, npm, yarn, or names and versions of browser -->

    ```
    node: v14.15.0
    yarn: 1.22.10
    chromium: 83.0.4103.116
    ```


### Steps to reproduce


I created a small (but not minimal) example demonstrating the issue here:
https://github.com/ivan-aksamentov/repro-mdx-inline-elements

It's based on Next.js and also contains styled-components (but none of this matter, see below).

The points of interest are:

 - [`src/pages/index.jsx`](https://github.com/ivan-aksamentov/repro-mdx-inline-elements/blob/3e936c649a/src/pages/index.jsx)
 - [`src/components.jsx`](https://github.com/ivan-aksamentov/repro-mdx-inline-elements/blob/3e936c649a/src/components.jsx)
 - [`src/content.md`](https://github.com/ivan-aksamentov/repro-mdx-inline-elements/blob/3e936c649a6bb5fd51101fd5b706b6e730597aeb/src/content.md#L1)
 - [`babel.config.js`](https://github.com/ivan-aksamentov/repro-mdx-inline-elements/blob/3e936c649a6bb5fd51101fd5b706b6e730597aeb/babel.config.js#L4)


In order to reproduce the bug, run the production version of this app with:

```bash

yarn install
next build && next start
```

and navigate to `localhost:3000`. You will see something like this:
![bad](https://user-images.githubusercontent.com/9403403/98885809-fdfd6780-2492-11eb-9cd1-a5131017a84f.png)


Note how all of the components are styled with plain useragent stylesheet (meaning most of the custom components ARE NOT picked up). Inspect the HTML code for the "link" in dev tools and note that it DOES have `target="_blank" rel="noopener noreferrer"` attributes (meaning that the custom `LinkExternal` component IS picked up). Also note how `>>>> LinkExternal <<<<<` is printed in build console (in terminal), but not `>>>> H1 <<<<<` (these are `console.log()` statements in the corresponding components).


Go to `babel.config.js` and comment-out the line containing `'@babel/plugin-transform-react-inline-elements'`.
Cleanup, rebuild and restart the app.

```bash
rm -rf .build out .cache .next
next build && next start
```

It should look like this now:
![good](https://user-images.githubusercontent.com/9403403/98885948-461c8a00-2493-11eb-829c-28d72760529f.png)



Note that all cusom components now work correctly: styled components' classnames are present, h1's text is replaced, backrgounds and margins are correctly styled, both console statements are printed in the build log, as expected. The `LinkExternal` component also still works as before. Reversing the change in `babel.config.js` reverts the fix.

Styled components don't play a role here, I just wanted to show that they are working as well, because they are important for my usecase. With these components, `babel-plugin-styled-components`, and associated npm packages removed the issue still persists.

### Expected behaviour

It is expected that the custom components are picked up, whether the `@babel/plugin-transform-react-inline-elements` is used or not

### Actual behaviour

Custom components are not picked up when `@babel/plugin-transform-react-inline-elements` is used

### Discussion

Let's generate a readable bunde code and see what is changing when adding/removing the plugin.
I added two Next.js plugins `withoutMinification()` and `withFriendlyChunkNames()`, which remove code minification and hashes from filenames in production build.

I did the following experiment:

 - prepared output directories:

    ```bash
    rm -rf compare/{good,bad}/**
    mkdir -p compare/{good,bad}
    ```

 - with babel plugin DISABLED, produced static build for "GOOD" version (static build has exactly the same issues as normal build, but it's easier to make sense of files it produces):

    ```bash
    rm -rf .build out .cache .next
    next build && next export
    cp -r .next/static/chunks/* compare/good/
    ```

 - with babel plugin ENABLED, produced static build for "BAD" version:
    
    ```
    rm -rf .build out .cache .next
    next build && next export
    cp -r .next/static/chunks/* compare/bad/
    ```

 - compared the resulting directories with webstorm:

    ```
    detach webstorm diff compare/{good,bad}
    ```

    the only difference seems to be in `pages/index.js`

 - generated a diff file for `pages/index.js`

    ```bash
    diff -u compare/{good,bad}/pages/index.js > compare/index.js.diff
    ```

 - one could also use `diff-so-fancy` to see the pretty diff in terminal:

    ```bash 
     diff -u compare/{good,bad}/pages/index.js | diff-so-fancy
    ```

You can find the results in [`compare/`](https://github.com/ivan-aksamentov/repro-mdx-inline-elements/tree/3e936c649a6bb5fd51101fd5b706b6e730597aeb/compare), directory, inluding the [`compare/index.js.diff`](https://github.com/ivan-aksamentov/repro-mdx-inline-elements/blob/3e936c649a6bb5fd51101fd5b706b6e730597aeb/compare/index.js.diff)


I was not able to make sense of the diff yet.

Unrelated to diff, but interestingly, the reason `LinkExternal` works seems to be the fact that it uses (renders) `children` props. Adding `children` to `H1` component also fixes the `h1` rendering. So props seems to be influencing the code optimizations in question. However, side effects, like `console.log()` don't seem to be preserved (notice how they are not printed during build) Sadly, this workaround will not work for styled components. 



### Related issues in the community

[`styled-components`](https://github.com/styled-components/babel-plugin-styled-components/issues/221) had a seemingly similar issue, and were able to solve it,  while `emotion` seems to have gaven up on this: [link1](https://emotion.sh/docs/css-prop#gotchas), [link2](https://github.com/emotion-js/emotion/issues/1191).

There is also a similarly useful plugin, [@babel/plugin-transform-react-constant-elements](https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements). So far it does not seem to cause any breakage. However, it woth keeping an eye on it as well.


### Possible workarounds

 - remove [`@babel/plugin-transform-react-inline-elements`](https://babeljs.io/docs/en/babel-plugin-transform-react-inline-elements), paying extra runtime performance and bundle size cost.

 - use `children` prop in custom components - does not work for many components, like styled-components, or components that are not meant to have children.
