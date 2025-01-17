import Axios from "../utils/http-request";
import { getRequestConfiguration } from "../utils/header-helper";
import {
  AuthProps,
  AuthSignUpProps,
  RequestVerifyAccount,
  ResetPasscodeProps,
  VerifyAccountProps,
  VerifyOtpProps,
} from "../interface/authenticattion";

export const apiLoginUser = async (values: AuthProps) => {
  const formData = new URLSearchParams();

  // Append all form fields to FormData
  Object.entries(values).forEach(([key, value]) => {
    if (value !== undefined) {
      formData.append(key, value.toString());
    }
  });
  try {
    const uri = `/auth/login/user`;

    // Get request configuration (assuming this function provides headers, etc.)
    const cfg = getRequestConfiguration({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    console.log(formData.toString());
    // Send the POST request to log in
    const result = await Axios.post(uri, formData.toString(), cfg);

    // Return the result
    return result;
  } catch (e: any) {
    // Return error response if the login fails
    return {
      data: {},
      status: "error",
      msg: e?.response?.data?.message || e?.message,
    };
  }
};

export const apiSignUpUser = async (values: AuthSignUpProps) => {
  const formData = new URLSearchParams();

  // Append all form fields to FormData
  Object.entries(values).forEach(([key, value]) => {
    if (value !== undefined) {
      formData.append(key, value.toString());
    }
  });

  try {
    const uri = `/auth/signup/user`;

    const cfg = getRequestConfiguration({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    // Send the POST request to log in
    const result = await Axios.post(uri, formData.toString(), cfg);

    // Return the result
    return result;
  } catch (e: any) {
    // Return error response if the login fails
    return {
      data: {},
      status: "error",
      msg: e?.response?.data?.message || e?.message,
      errors: e?.response?.data?.errors || [],
    };
  }
};

export const apiVerifyOtp = async (values: VerifyOtpProps) => {
  const formData = new URLSearchParams();

  // Append all form fields to FormData
  Object.entries(values).forEach(([key, value]) => {
    if (value !== undefined) {
      formData.append(key, value.toString());
    }
  });
  try {
    const uri = `/auth/verify-otp`;

    const cfg = getRequestConfiguration({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    console.log(formData.toString());

    // Send the POST request to log in
    const result = await Axios.put(uri, formData.toString(), cfg);

    // Return the result
    return result;
  } catch (e: any) {
    // Return error response if the login fails
    return {
      data: {},
      status: "error",
      msg: e?.response?.data?.message || e?.message,
    };
  }
};

export const apiLogoutUser = async () => {
  try {
    const uri = `/auth/logout/user`;

    const cfg = getRequestConfiguration({});

    // Send the POST request to log in
    const result = await Axios.delete(uri, cfg);

    // Return the result
    return result;
  } catch (e: any) {
    // Return error response if the login fails
    return {
      data: {},
      status: "error",
      msg: e?.response?.data?.message || e?.message,
    };
  }
};

export const apiRequestVerifyAccount = async (values: RequestVerifyAccount) => {
  const formData = new URLSearchParams();

  // Append all form fields to FormData
  Object.entries(values).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      formData.append(key, value.toString());
    }
  });

  console.log(formData.toString());
  try {
    const uri = `/auth/verify-account`;

    const cfg = getRequestConfiguration({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    // Send the POST request to log in
    const result = await Axios.post(uri, formData.toString(), cfg);

    // Return the result
    return result;
  } catch (e: any) {
    // Return error response if the login fails
    return {
      data: {},
      status: "error",
      msg: e?.response?.data?.message || e?.message,
    };
  }
};

export const apiVerifyAccount = async (values: VerifyAccountProps) => {
  const formData = new URLSearchParams();
  console.log(values);

  // Append all form fields to FormData
  Object.entries(values).forEach(([key, value]) => {
    if (value !== undefined) {
      formData.append(key, value.toString());
    }
  });
  try {
    const uri = `/auth/verify-account`;

    const cfg = getRequestConfiguration({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    // Send the POST request to log in
    const result = await Axios.patch(uri, formData.toString(), cfg);

    // Return the result
    return result;
  } catch (e: any) {
    // Return error response if the login fails
    return {
      data: {},
      status: "error",
      msg: e?.response?.data?.message || e?.message,
    };
  }
};

export const apiResendVerification = async (email: string) => {
  const formData = new URLSearchParams();

  // Append email to FormData
  formData.append("email", email);
  try {
    const uri = `/auth/verification`;

    const cfg = getRequestConfiguration({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    // Send the POST request to log in
    const result = await Axios.post(uri, formData.toString(), cfg);

    // Return the result
    return result;
  } catch (e: any) {
    // Return error response if the login fails
    return {
      data: {},
      status: "error",
      msg: e?.response?.data?.message || e?.message,
    };
  }
};

export const apiResetPassword = async (values: ResetPasscodeProps) => {
  const formData = new URLSearchParams();

  // Append all form fields to FormData
  Object.entries(values).forEach(([key, value]) => {
    if (value !== undefined) {
      formData.append(key, value.toString());
    }
  });
  try {
    const uri = `/auth/reset-passcode`;

    const cfg = getRequestConfiguration({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    // Send the POST request to log in
    const result = await Axios.put(uri, formData.toString(), cfg);

    // Return the result
    return result;
  } catch (e: any) {
    // Return error response if the login fails
    return {
      data: {},
      status: "error",
      msg: e?.response?.data?.message || e?.message,
      errors: e?.response?.data?.errors || [],
    };
  }
};

// export const apiRefreshAccessToken = async () => {
//     const formData = new URLSearchParams();

//   // Append email to FormData
//   formData.append("email", email);
//   try {
//     const uri = `/auth/verification`;

//     const cfg = getRequestConfiguration({
//       "Content-Type": "application/x-www-form-urlencoded",
//     });

//     // Send the POST request to log in
//     const result = await Axios.post(uri, formData, cfg);

//     // Return the result
//     return result;
//   } catch (e: any) {
//     // Return error response if the login fails
//     return {
//       data: {},
//       status: "error",
//       msg: e?.response?.data?.message || e?.message,
//     };
//   }
// };

export const apiFogotPassword = async (email: string) => {
  const formData = new URLSearchParams();

  // Append email to FormData
  formData.append("email", email);
  try {
    const uri = `/auth/forgot-passcode`;

    const cfg = getRequestConfiguration({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    // Send the POST request to log in
    const result = await Axios.post(uri, formData.toString(), cfg);

    // Return the result
    return result;
  } catch (e: any) {
    // Return error response if the login fails
    return {
      data: {},
      status: "error",
      msg: e?.response?.data?.message || e?.message,
    };
  }
};
