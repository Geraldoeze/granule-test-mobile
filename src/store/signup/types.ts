// src/store/signup/types.ts
export interface SignupState {
  authenticationData: {
    email: string;
    otp: string;
    passcode: string;
    token: string;
  };
  personalInfo: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  addressInfo: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  currentStep: number;
  isSubmitting: boolean;
  error: string | null;
}
