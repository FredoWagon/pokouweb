const path = require('path')

module.exports = {
  reactStrictMode: true,
}


// Configuration sass-scss
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
}