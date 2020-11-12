const getWithMDX = require('@next/mdx')

let nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

const withMDX = getWithMDX({
  extension: /\.mdx?$/,
})

// Renames generated javascript chunk files into something reasonable
// so that it's easier to read and diff-compare.
// Might break the build, if some files have the same name, but so far it works fine.
function withFriendlyChunkNames(nextConfig) {
  const webpack = (webpackConfig, options) => {

    if (options.isServer) {
      // The chunk with name `<hash>.js` is produced somewhere here.
      // In my case it was `f6078781a05fe1bcb0902d23dbbb2662c8d200b3.js`
      // I could not figure out how to rename it into something reasonable yet.
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(webpackConfig, options)
      }

      return webpackConfig
    }

    // Override `output.filename` and `output.chunkFilename`
    // to rename most of the chunks.
    webpackConfig.output.filename = ({ chunk, contentHashType }) => {
      if (contentHashType === 'javascript') {
        return 'static/chunks/' + chunk.name + '.js'
      }
    }
    webpackConfig.output.chunkFilename = 'static/chunks/[name].js'

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(webpackConfig, options)
    }

    return webpackConfig
  }

  return { ...nextConfig, webpack }
}

// Disables minification of generated javascript code
// so that it's easier to read and diff-compare.
function withoutMinification(nextConfig) {
  const webpack = (webpackConfig, options) => {
    if (webpackConfig.optimization) {
      webpackConfig.optimization.minimizer = []
    }
    else {
      webpackConfig.optimization = { minimizer: [] }
    }

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(webpackConfig, options)
    }

    return newConfig
  }

  return { ...nextConfig, webpack }
}


nextConfig = withMDX(nextConfig)

nextConfig = withFriendlyChunkNames(nextConfig)

nextConfig = withoutMinification(nextConfig)

module.exports = nextConfig
