import { RootState } from '../store';
export const selectAuthenticatData = (state: RootState) => state.signup.authenticationData;
export const selectPersonalInfo = (state: RootState) => state.signup.personalInfo;
export const selectAddressInfo = (state: RootState) => state.signup.addressInfo;
export const selectCurrentStep = (state: RootState) => state.signup.currentStep;
export const selectIsSubmitting = (state: RootState) => state.signup.isSubmitting;
export const selectError = (state: RootState) => state.signup.error;
