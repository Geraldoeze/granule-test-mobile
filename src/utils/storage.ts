import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_KEYS = {
  FIRST_TIME_USER: "isFirstTimeUser",
  // Add other keys as needed
};

class Storage {
  static async checkFirstTimeUser() {
    try {
      const isFirstTime = await AsyncStorage.getItem(
        STORAGE_KEYS.FIRST_TIME_USER
      );

      if (isFirstTime === null) {
        // First time user - set the flag and return true
        await AsyncStorage.setItem(STORAGE_KEYS.FIRST_TIME_USER, "false");
        console.log("This is user's first time");
        return true;
      }

      console.log("Not user's first time");
      return false;
    } catch (error) {
      console.error("Error checking first time user:", error);
      return false;
    }
  }

  static async resetFirstTimeUser() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.FIRST_TIME_USER);
      console.log("First time user status reset");
    } catch (error) {
      console.error("Error resetting first time user:", error);
    }
  }
  static async setItem(key: string, value: string) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error(`Error setting ${key}:`, error);
    }
  }

  static async getItem(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(`Error getting ${key}:`, error);
      return null;
    }
  }
  static async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
    }
  }
}

export default Storage;
