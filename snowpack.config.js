/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  alias: {
    "@src": "./src",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    [
      "@snowpack/plugin-optimize",
      {
        preloadModules: true,
      },
    ],
    [
      "@snowpack/plugin-build-script",
      {
        cmd: "postcss",
        input: [".css"],
        output: [".css"],
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  packageOptions: {
    installTypes: true,
    polyfillNode: true,
  },
  devOptions: {
    port: 26826,
  },
  buildOptions: {
    clean: true,
    out: "dist",
  },
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    target: "es2020",
  },
};
