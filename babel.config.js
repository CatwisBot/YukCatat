module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  // Required for react-native-reanimated (used by nativewind + animations)
  plugins: ['react-native-reanimated/plugin'],
};
