import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import React from 'react'

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return <Code codeString={props.children.trim()} language={props.className && props.className.replace('language-', '')} {...props} />;
    }
  }
}

export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>;
