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
    occupation: string;
    annualIncomeRange: string;
    otherIncomeSource: string;
    verification_type: string;
    verification_id: string;
  };
  politicalInfo: {
    politicalFigure: boolean;
    politicalOffice: string;
    politicalPosition: string;
    politicalRelations: string;
    politicalOfficeDate: string;
    currentlyHoldingPosition: boolean;
  };
  addressInfo: {
    country: string;
    address: string;
    area: string;
    state: string;
    lga: string;
  };
  currentStep: number;
  isSubmitting: boolean;
  error: string | null;
}
