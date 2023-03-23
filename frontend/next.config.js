const withImages = require('next-images');

const redirects = {
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/crypto',
        permanent: true
      }
    ];
  }
};

module.exports = {
  withImages: withImages(redirects),
  images: {
    loader: 'akamai',
    path: '',
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};
