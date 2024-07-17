module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@navigation': './src/navigation',
          '@organisms': './src/components/organisms',
          '@screens': './src/screens',
          '@store': './src/store',
          '@styles': './src/styles',
          '@svgs': './src/assets/svgs',
        },
        extentions: ['.js', '.jsx'],
        root: ['./'],
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
