const getWithMDX = require('@next/mdx')

let nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

const withMDX = getWithMDX({
  extension: /\.mdx?$/,
})

nextConfig = withMDX(nextConfig)

module.exports = nextConfig
