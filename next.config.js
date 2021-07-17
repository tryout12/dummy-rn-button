const isProd = process.env.NODE_ENV === 'production';
const baseUrl = 'https://tryout12.github.io/dummy-rn-button';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? baseUrl : '',
  publicRuntimeConfig: {
    baseUrl: isProd ? baseUrl : '',
  },
  images: {
    loader: 'imgix',
    path: ''
  },
}
