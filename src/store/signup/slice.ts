// src/store/signup/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignupState } from "./types";

const initialState: SignupState = {
  authenticationData: {
    email: "",
    otp: "",
    passcode: "",
    token: "",
  },
  personalInfo: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  },
  addressInfo: {
    street: "",
    city: "",
    state: "",
    zipCode: "",
  },

  currentStep: 1,
  isSubmitting: false,
  error: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    updateAuthenticationData: (
      state,
      action: PayloadAction<Partial<SignupState["authenticationData"]>>
    ) => {
      state.authenticationData = {
        ...state.authenticationData,
        ...action.payload,
      };
    },
    updatePersonalInfo: (
      state,
      action: PayloadAction<Partial<SignupState["personalInfo"]>>
    ) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    updateAddressInfo: (
      state,
      action: PayloadAction<Partial<SignupState["addressInfo"]>>
    ) => {
      state.addressInfo = { ...state.addressInfo, ...action.payload };
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetSignupState: (state) => {
      return initialState;
    },
  },
});

export const {
  updateAuthenticationData,
  updatePersonalInfo,
  updateAddressInfo,
  setCurrentStep,
  setSubmitting,
  setError,
  resetSignupState,
} = signupSlice.actions;

export default signupSlice.reducer;
