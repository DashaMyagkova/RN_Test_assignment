module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {},
        extentions: ['.js', '.jsx'],
        root: ['./'],
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
