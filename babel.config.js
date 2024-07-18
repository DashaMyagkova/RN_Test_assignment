module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@atoms': './src/components/atoms',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hocs': './src/hocs',
          '@mocks': './src/mocks',
          '@molecules': './src/components/molecules',
          '@navigation': './src/navigation',
          '@organisms': './src/components/organisms',
          '@pngs': './src/assets/pngs',
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
