// // next.config.js
// export function webpack(config) {
//     config.module.rules.push({
//         test: /\.otf$/i,
//         type: "asset/resource",
//         generator: {
//             filename: "static/fonts/[name].[hash][ext]",
//         },
//     });
//     return config;
// }
  

// next.config.mjs
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.otf$/i,
//       type: "asset/resource",
//       generator: {
//         filename: "static/fonts/[name].[hash][ext]",
//       },
//     });
//     return config;
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16 handles fonts automatically - no custom webpack config needed
};

export default nextConfig;