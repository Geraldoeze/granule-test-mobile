export interface AuthProps {
  email: string;
  passcode: string;
}
export interface AuthSignUpProps {
  email: string;
  passcode: string;
}
export interface VerifyAccountProps {
  code: string;
  token: string;
}

export interface RequestVerifyAccount {
  email: string;
  referral_code: string;
}

export interface VerifyOtpProps {
  otp: string;
  token: string;
}

export interface ResetPasscodeProps {
  token: string;
  passcode: string;
  otp: string;
}

export interface CompleteProfileProps {
  email: string;
  verification_id: string;
  verification_type: string;
  country: string;
  state: string;
  address: string;
  lga: string;
  area: string;
  occupation: string;
  annual_income: string;
  other_income_sources: string;
  political_person: boolean;
  political_current_past: string;
  political_office: string;
  political_office_date: string;
  currently_holding: boolean;
  related_to_political: string;
}
