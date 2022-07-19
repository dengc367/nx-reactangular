module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@nrwl/react/babel',
      {
        runtime: 'automatic',
      },
    ],
    // '@babel/preset-env',
  ];
  const plugins = [
    // ['@babel/plugin-proposal-decorators', { version: '2021-12' }],
    // ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    // '@babel/plugin-syntax-decorators',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    // 'remove-decorator',
    // '@babel/plugin-syntax-dynamic-import',
    // '@babel/plugin-proposal-object-rest-spread',
    // '@babel/plugin-syntax-import-meta',
    // ['@babel/plugin-proposal-class-properties', { loose: false }],
    // '@babel/plugin-proposal-json-strings',
    // '@loadable/babel-plugin',
    // 'transform-decorators-legacy',
    // 'transform-class-properties',
  ];

  return {
    presets,
    plugins,
  };
};
