import React from 'react'

import { MDXProvider } from '@mdx-js/react'

import { H1, H2, H3, Blockquote, Pre, LinkExternal } from '../components'
import Content from '../content.md'

const components = { h1: H1, h2: H2, h3: H3, blockquote: Blockquote, pre: Pre, a: LinkExternal }

export default function Index() {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  )
}
