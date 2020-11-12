import styled from 'styled-components'

export const H1 = () => {
  console.log('>>>> H1 <<<<<')
  return <h1>Hello!</h1>
}

export const H2 = styled.h2`
  border-top: #ccc solid 1px;
  padding-top: 1rem;
  margin-top: 2rem;
  font-size: 1.25rem;
`

export const H3 = styled.h2`
  font-size: 1rem;
`

export const Blockquote = styled.blockquote`
  padding: 6px 8px;
  border-radius: 3px;
  background-color: #f4ebbd;
`

export const Pre = styled.pre`
  padding: 6px 8px;
  border-radius: 3px;
  background-color: #ccc;

  code {
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
  }
`

export function LinkExternal({ href, children, ...restProps }) {
  console.log('>>>> LinkExternal <<<<<')
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...restProps}>
      {children}
    </a>
  )
}
