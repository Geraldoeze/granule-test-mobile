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
    occupation: "",
    annualIncomeRange: "",
    otherIncomeSource: "",
    verification_type: "",
    verification_id: "",
  },
  politicalInfo: {
    politicalFigure: false,
    politicalOffice: "",
    politicalPosition: "",
    politicalRelations: "",
    politicalOfficeDate: "",
    currentlyHoldingPosition: false,
  },
  addressInfo: {
    address: "",
    area: "",
    state: "",
    lga: "",
    country: "",
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
    updatePoliticalInfo: (
      state,
      action: PayloadAction<Partial<SignupState["politicalInfo"]>>
    ) => {
      state.politicalInfo = { ...state.politicalInfo, ...action.payload };
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
  updatePoliticalInfo,
  updateAddressInfo,
  setCurrentStep,
  setSubmitting,
  setError,
  resetSignupState,
} = signupSlice.actions;

export default signupSlice.reducer;
