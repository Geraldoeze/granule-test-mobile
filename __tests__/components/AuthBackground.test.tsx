import React from "react";
import { render } from "@testing-library/react-native";
import AuthBackground from '../../src/components/display/AuthBackground';
import {jest, it, describe, expect} from '@jest/globals';
import { Text } from "react-native";
// Mock the useTheme hook
jest.mock("../../src/constants/colors", () => ({
  useTheme: () => ({
    light_background: "#f0f0f0",
  }),
}));

describe("AuthBackground", () => {
  it("renders correctly with the theme background color", () => {
    const { getByTestId } = render(
      <AuthBackground>
        <Text testID="child-text">Hello, World!</Text>
      </AuthBackground>
    );

    const container = getByTestId("container");
    expect(container.props.style[1].backgroundColor).toBe("#f0f0f0");
  });

  it("renders its children correctly", () => {
    const { getByText } = render(
      <AuthBackground>
        <Text>Hello, World!</Text>
      </AuthBackground>
    );

    expect(getByText("Hello, World!")).toBeTruthy();
  });
});
