require('dotenv').config();

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://raw.githack.com/rzfury/rz-nextjs-tailwind-typescript/gh-pages/' : '',
}
