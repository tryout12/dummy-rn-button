const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://tryout12.github.io/dummy-rn-button' : '',
  publicRuntimeConfig: {
    baseUrl: isProd ? 'https://tryout12.github.io/dummy-rn-button' : '',
  },
  images: {
    loader: 'imgix',
    path: ''
  },
}
