// Mock the gesture handler
jest.mock("react-native-gesture-handler", () => {
  const View = require("react-native").View;
  return {
    PanGestureHandler: View,
    GestureHandlerRootView: View,
    State: {},
    Directions: {},
  };
});

// Mock bottom sheet
jest.mock("@gorhom/bottom-sheet", () => {
  const View = require("react-native").View;
  return {
    __esModule: true,
    default: View,
    BottomSheetView: View,
    BottomSheetBackdrop: View,
    // Add any other bottom sheet components you're using
  };
});



jest.mock("react-native-vector-icons/Ionicons", () => "Icon");

// If you use other icon sets, mock them too:
jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");
jest.mock("react-native-vector-icons/FontAwesome", () => "Icon");
jest.mock("react-native-vector-icons/Octicons", () => "Icon");

// ... any other icon sets you use
