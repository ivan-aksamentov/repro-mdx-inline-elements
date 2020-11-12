import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { MDXProvider } from '@mdx-js/react'

import { H1, LinkExternal } from './components'
import Content from './content.md'

const components = { h1: H1, a: LinkExternal }

export default function Index() {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
