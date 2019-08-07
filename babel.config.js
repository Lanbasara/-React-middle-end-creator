const dev = process.env.NODE_ENV === 'test'
const devConfig = {
  plugins: [
    ['import', {libraryName: 'antd',libraryDirectory:'es', style : 'css'}],
    ["@babel/plugin-proposal-decorators", {legacy: true}],
    '@babel/plugin-proposal-class-properties',
    ['dva-hmr']
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome : "67",
        },
        useBuiltIns : 'usage',
        corejs : '2'
      },
    ],
    '@babel/preset-react'
  ],
};
const prodConfig = {
  plugins: [
    ["@babel/plugin-proposal-decorators", {legacy: true}],
    '@babel/plugin-proposal-class-properties',
    ['dva-hmr']
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome : "67",
        },
        useBuiltIns : 'usage',
        corejs : '2'
      },
    ],
    '@babel/preset-react'
  ],
};
module.exports = dev ? prodConfig : devConfig