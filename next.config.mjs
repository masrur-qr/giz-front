// /** @type {import('next').NextConfig} */
// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// const nextConfig = {
//   i18n,
//   images: {
//     domains: ["http://127.0.0.1"],
//     formats: ["image/avif", "image/webp"],
//   },
// };
// // module.exports = { images: { domains: ['http://127.0.0.1'], formats: ['image/avif', 'image/webp'], }, }

// export default withNextIntl(nextConfig);

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);

