require('dotenv').config();

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
}
