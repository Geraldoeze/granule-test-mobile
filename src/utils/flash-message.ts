import { showMessage } from "react-native-flash-message";

type showFlashMessageprops = {
  message: string;
  description: string;
  type?: "success" | "info" | "warning" | "danger" | "default";
};
export const showFlashMessage = ({
  message,
  description,
  type = "info",
}: showFlashMessageprops) => {
  showMessage({
    message,
    description,
    type,
    textStyle: { fontFamily: "Outfit Medium" },
    titleStyle: { fontFamily: "Outfit Medium" },
    floating: true, // Optional: Makes the toast appear as floating
    duration: 3000, // Optional: Duration in milliseconds
  });
};
