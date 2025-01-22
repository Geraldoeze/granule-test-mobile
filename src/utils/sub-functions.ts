import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"; // Import the UTC plugin
import timezone from "dayjs/plugin/timezone"; // Import the timezone plugin
import customParseFormat from "dayjs/plugin/customParseFormat"; // For parsing custom formats
dayjs.extend(timezone); // Extend dayjs with the timezone plugin

dayjs.extend(utc); // Extend dayjs with the UTC plugin
dayjs.extend(customParseFormat); // Extend dayjs with the custom parse format plugin

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
export function removeDashes(input: string) {
  return input.replace(/-/g, "");
}

export function getFirstErrorMessage(response: any) {
  const errors = response;

  if (Array.isArray(errors) && errors.length > 0) {
    // Return the message from the first object in the array
    return errors[0]?.message || "An unknown error occurred.";
  } else if (errors && typeof errors === "object") {
    // If errors is a single object, return its message
    return errors.message || "An unknown error occurred.";
  }

  // Fallback message if errors is undefined or in an unexpected format
  return "An unknown error occurred.";
}

export function formatDateFromString(dateString: string): string {
  const date = dayjs.utc(dateString).local(); // Parse the date as UTC and convert to local time

  // Use the `format` method with the desired format string
  const formattedDate = date.format("YYYY-MM-DD");

  return formattedDate;
}

export const formatInput = (value: string): string => {
  const digitsOnly = value.replace(/\D/g, ""); // Remove all non-digit characters
  return digitsOnly.split("").slice(0, 6).join("-"); // Add dashes after digits
};
