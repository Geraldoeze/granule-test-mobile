module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],

  // Update transformIgnorePatterns to include vector-icons and gorhom bottom sheet
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|@react-navigation|react-native-vector-icons|@gorhom/bottom-sheet|react-native-reanimated|react-native-gesture-handler)/)",
  ],

  moduleNameMapper: {
    ".(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },

  // Add this to handle the vector-icons
  moduleDirectories: ["node_modules"],

  // Add a setup file to mock vector-icons if needed
  setupFiles: ["<rootDir>/jest.setup.js"],
};
