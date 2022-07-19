const { merge } = require('webpack-merge');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;

const deps = require('./../../package.json').dependencies;

module.exports = (config, context) => {
  return merge(config, {
    // overwrite values here
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'app',
        remotes: {
          // // header: "header@http://localhost:3001/remoteEntry.js",
          // // leftSideBar: "leftSidebar@http://localhost:3002/remoteEntry.js",
          // // rightSidebar:
          // //   "rightSidebar@http://localhost:3003/remoteEntry.js",
          // // footer: "footer@http://localhost:3004/remoteEntry.js",
          // arkhubmfe:
          //   "arkhubmfe@http://localhost:4200/arkhub/remoteEntry.js",
          angularappmfe: 'angularappmfe@http://localhost:4200/remoteEntry.js',
        },
        shared: {
          ...deps,
          'react-dom': {
            singleton: true,
            eager: true,
            strictVersion: true,
            requiredVersion: deps['react-dom'],
          },
          react: {
            singleton: true,
            eager: true,
            strictVersion: true,
            requiredVersion: deps['react'],
          },
        },
      }),
    ],
  });
};
