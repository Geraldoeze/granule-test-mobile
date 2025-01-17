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