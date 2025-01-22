import * as Keychain from "react-native-keychain";
import ReactNativeBiometrics from "react-native-biometrics";
import { Platform } from "react-native";

// Utility class for secure storage operations
class SecureAuthStorage {
  static EMAIL_KEY = "user_email";
  static rnBiometrics = new ReactNativeBiometrics();
  static CREDS_KEY = "secure_credentials";

  static async storeEmail(email: string) {
    try {
      await Keychain.setInternetCredentials(
        this.EMAIL_KEY,
        this.EMAIL_KEY,
        email
      );
      return true;
    } catch (error) {
      console.error("Error storing email:", error);
      return false;
    }
  }

  static async getEmail() {
    try {
      const credentials = await Keychain.getInternetCredentials(this.EMAIL_KEY);
      return credentials ? credentials.password : null;
    } catch (error) {
      console.error("Error retrieving email:", error);
      return null;
    }
  }

  static async removeEmail() {
    try {
      await Keychain.resetInternetCredentials(this.EMAIL_KEY);
      return true;
    } catch (error) {
      console.error("Error removing email:", error);
      return false;
    }
  }

  // In your SecureAuthStorage class
  static async isBiometricsEnrolled() {
    try {
      const { available, biometryType } =
        await this.rnBiometrics.isSensorAvailable();
      if (!available) return false;

      // On iOS, if biometrics is available but not enrolled, it will throw an error
      try {
        await this.rnBiometrics.simplePrompt({
          promptMessage: "Checking biometric availability",
          cancelButtonText: "Cancel",
        });
        return true;
      } catch (error: any) {
        // Check if the error is specifically about no enrolled identities
        if (
          error.message?.includes("not enrolled") ||
          error.message?.includes("No identities are enrolled")
        ) {
          return false;
        }
        throw error;
      }
    } catch (error) {
      console.error("Error checking biometrics enrollment:", error);
      return false;
    }
  }

  // In your SecureAuthStorage class
  static async isBiometricsAvailable() {
    try {
      // Log the RNBiometrics instance
      console.log("RNBiometrics instance:", this.rnBiometrics);

      // Check if we're running on simulator
      const isSimulator = Platform.OS === "ios" && __DEV__;
      console.log("Is Simulator:", isSimulator);

      // Try to get sensor status
      console.log("Attempting to check sensor...");
      const result = await this.rnBiometrics.isSensorAvailable();
      console.log("Raw sensor check result:", result);

      // Check Face ID enrollment status
      if (Platform.OS === "ios") {
        try {
          const { success } = await this.rnBiometrics.simplePrompt({
            promptMessage: "Checking Face ID availability",
            cancelButtonText: "Cancel",
          });
          console.log("Face ID prompt result:", success);
        } catch (promptError) {
          console.log("Face ID prompt error:", promptError);
        }
      }

      return {
        available: result.available,
        biometryType: result.biometryType || null,
      };
    } catch (error: any) {
      console.error("Detailed error in isBiometricsAvailable:", {
        message: error.message,
        code: error?.code,
        name: error?.name,
        stack: error?.stack,
      });
      return { available: false, biometryType: null };
    }
  }

  static async storeCredentials(email: string, password: string) {
    try {
      if (!Keychain) {
        console.error("Keychain is not available");
        return false;
      }
  
      const credentials = JSON.stringify({ email, password });
      await Keychain.setGenericPassword(
        email,
        credentials,
        {
          accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
          accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
          service: this.CREDS_KEY,
        }
      );
  
      console.log("✓ Credentials stored successfully");
      return true;
  
    } catch (error) {
      console.error("Error storing credentials:", error);
      return false;
    }
  }
  
  static async getStoredCredentials() {
    try {
      const storedCredentials = await Keychain.getGenericPassword({
        service: this.CREDS_KEY,
        accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
      });
  
      if (storedCredentials) {
        const parsedCredentials = JSON.parse(storedCredentials.password);
        console.log("✓ Retrieved credentials for:", storedCredentials.username);
        return {storedCredentials, parsedCredentials};
      } else {
        console.log("No stored credentials found");
        return null;
      }
  
    } catch (error) {
      console.error("Error retrieving credentials:", error);
      return null;
    }
  }


  
  // You can also add a separate verification method
  static async verifyCredentialsExist() {
    try {
      const hasCredentials = await Keychain.hasGenericPassword({
        service: this.CREDS_KEY
      });
      console.log("Credentials exist:", hasCredentials);
      
      if (hasCredentials) {
        const credentials = await Keychain.getGenericPassword({
          service: this.CREDS_KEY,
          accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
        });
        console.log("Stored username:", credentials);
      }
      
      return hasCredentials;
    } catch (error) {
      console.error("Error verifying credentials:", error);
      return false;
    }
  }

static handleKeychain = async () => {
  try {
    // First store the credentials
    const username = 'zuck';
    const password = 'poniesRgr8';
    
    await Keychain.setGenericPassword(username, password);
    console.log('Credentials stored successfully');

    // Then retrieve them
    const credentials = await Keychain.getGenericPassword();
    
    if (credentials) {
      console.log(
        'Credentials retrieved:',
        JSON.stringify(credentials, null, 2)
      );
      // credentials will have username and password properties
      console.log('Username:', credentials.username);
      console.log('Password:', credentials.password);
    } else {
      console.log('No credentials stored');
    }

  } catch (error) {
    console.error('Keychain error:', error);
  }
};

// If you need to reset/clear credentials
static clearKeychain = async () => {
  try {
    await Keychain.resetGenericPassword();
    console.log('Credentials cleared successfully');
  } catch (error) {
    console.error('Error clearing credentials:', error);
  }
};

  // Add a method to check if credentials exist
  static async hasStoredCredentials(): Promise<boolean> {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: this.CREDS_KEY,
      });
      return credentials !== false;
    } catch (error) {
      console.error("Error checking stored credentials:", error);
      return false;
    }
  }

  // Add a method to clear credentials if needed
  static async clearCredentials(): Promise<boolean> {
    try {
      await Keychain.resetGenericPassword({
        service: this.CREDS_KEY,
      });
      return true;
    } catch (error) {
      console.error("Error clearing credentials:", error);
      return false;
    }
  }

  // Enable biometric authentication
  static async enableBiometrics() {
    try {
      // First check if biometrics is available
      const { available } = await this.isBiometricsAvailable();
      if (!available) {
        throw new Error("Biometrics not available");
      }

      // Create keys for biometric encryption
      const { publicKey } = await this.rnBiometrics.createKeys();

      // Store biometrics enabled flag
      await Keychain.setInternetCredentials(
        "biometrics_enabled",
        "biometrics_enabled",
        "true"
      );

      return true;
    } catch (error) {
      console.error("Error enabling biometrics:", error);
      return false;
    }
  }

  // Check if biometrics is enabled
  static async isBiometricsEnabled() {
    try {
      const credentials = await Keychain.getInternetCredentials(
        "biometrics_enabled"
      );
      if (!credentials) return false;
      return (
        (credentials as { username: string; password: string }).password ===
        "true"
      );
    } catch (error) {
      console.error("Error checking biometrics status:", error);
      return false;
    }
  }


  // Verify biometric authentication
  static async verifyBiometric() {
    try {
      const { success } = await this.rnBiometrics.simplePrompt({
        promptMessage: "Verify your identity",
        cancelButtonText: "Cancel",
      });
      return success;
    } catch (error) {
      console.error("Error verifying biometrics:", error);
      return false;
    }
  }
}

export default SecureAuthStorage;
