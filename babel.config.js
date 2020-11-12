module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-react-inline-elements', // comment this line to fix the issue
  ],
}

