import * as React from 'react'

const style = { color: '#6b61ff' }

export const H1 = () => {
  console.log('>>>> H1 <<<<<')
  return <h1 style={style}>Hello!</h1>
}

export function LinkExternal({ href, children, ...restProps }) {
  console.log('>>>> LinkExternal <<<<<')
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...restProps}>
      {children}
    </a>
  )
}
