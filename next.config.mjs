// next.config.js
export function webpack(config) {
    config.module.rules.push({
        test: /\.otf$/i,
        type: "asset/resource",
        generator: {
            filename: "static/fonts/[name].[hash][ext]",
        },
    });
    return config;
}
  