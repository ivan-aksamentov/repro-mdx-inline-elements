module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@babel/plugin-transform-react-inline-elements', // comment this line to fix the issue
    'babel-plugin-styled-components',
  ],
}
