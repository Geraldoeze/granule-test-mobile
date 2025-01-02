import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AuthBackBtn from '../../src/components/display/AuthBackBtn';
import {jest, it, describe, expect} from '@jest/globals';

// Mock the useTheme hook
jest.mock('../../src/constants/colors', () => ({
  useTheme: () => ({
    light_bg: '#f0f0f0',
    dark: '#333333',
  }),
}));

describe('AuthBackBtn', () => {
  it('renders correctly with the theme', () => {
    const { getByText, getByTestId } = render(
      <AuthBackBtn onpress={() => {}} />
    );

    expect(getByText('Back')).toBeTruthy();
    expect(getByTestId('icon')).toBeTruthy(); // Add a testID to the Icon if necessary
  });

  it('calls the onpress function when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<AuthBackBtn onpress={mockOnPress} />);

    fireEvent.press(getByText('Back'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
