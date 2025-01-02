// __mocks__/themeMock.js or themeMock.ts
import { useTheme as originalUseTheme } from "../src/constants/colors";  // Import the original useTheme

export const setupThemeMock = () => {
  jest.mock("../src/constants/colors", () => ({
    useTheme: jest.fn(),  // Mock the named export directly here
  }));
};

// Use this function to mock the return value inside your tests
export const mockUseTheme = (mockReturnValue) => {
  const { useTheme } = require("../src/constants/colors"); // Access the mocked useTheme here
  useTheme.mockReturnValue(mockReturnValue); // Mock return value
};

// Reset mocks between tests
export const resetThemeMock = () => {
  jest.clearAllMocks();
};
