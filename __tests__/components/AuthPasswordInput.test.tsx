import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import AuthPasswordInput from "../../src/components/display/AuthPasswordInput";
import { useTheme } from "../../src/constants/colors";
import {
  jest,
  it,
  describe,
  expect,
  beforeEach,
  afterEach,
} from "@jest/globals";

import {
  setupThemeMock,
  mockUseTheme,
  resetThemeMock,
} from "../../__mocks__/themeMock";

// Setup the mock at the top of your file
setupThemeMock();
  

describe("AuthPasswordInput", () => {
  beforeEach(() => {
    resetThemeMock();
  });
  afterEach(() => {
    resetThemeMock();
  });


  it("renders correctly with given label", () => {
    const { getByText } = render(<AuthPasswordInput label="Password" />);
    expect(getByText("Password")).toBeTruthy();
  });

  it("renders password input with secure text entry", () => {
    const { getByPlaceholderText } = render(
      <AuthPasswordInput label="Password" />
    );
    const input = getByPlaceholderText("*******");
    expect(input.props.secureTextEntry).toBe(true);
  });

  it("applies correct styles to the container", () => {
    const { getByTestId } = render(<AuthPasswordInput label="Password" />);
    const container = getByTestId("input-container");
    expect(container.props.style).toEqual(
      expect.objectContaining({
        marginVertical: 30,
      })
    );
  });

  it("toggles password visibility when eye icon is pressed", async () => {
    const { getByTestId } = render(<AuthPasswordInput label="Password" />);

    // Check initial state (password hidden)
    expect(getByTestId("password-visibility-icon-hidden")).toBeTruthy();

    // Click the visibility icon (toggle visibility)
    fireEvent.press(getByTestId("password-visibility-icon-hidden")); // Press the icon when it's hidden

    // Wait for the state update and check the icon change
    await waitFor(() => {
      expect(getByTestId("password-visibility-icon-visible")).toBeTruthy();
    });
  });
  
});
