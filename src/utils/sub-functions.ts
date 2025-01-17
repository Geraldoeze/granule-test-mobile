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
