module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['./'],
        alias: {
          '@app/types': './src/@types',
          '@app/components': './src/components',
          '@app/constants': './src/constants',
          '@app/screens': './src/screens',
          '@app/hooks': './src/hooks',
          '@app/lib': './src/lib',
          '@app/routes': './src/routes',
        },
      },
    ],
  ],
};
