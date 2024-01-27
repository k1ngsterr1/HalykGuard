module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@assets": "./src/assets",
            "@shared": "./src/shared",
            "@entities": "./src/entities",
            "@features": "./src/features",
            "@widgets": "./src/widgets",
            "@screens": "./src/screens",
            "@redux": "./src/redux",
            "@app": "./src/app",
          },
        },
      ],
    ],
  };
};
