import React, {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import type { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { StyleSheet, Text } from "react-native";

interface BottomSheetContextProps {
  openBottomSheet: (
    content: ReactNode,
    snapPoints?: Array<string | number>
  ) => void;
  closeBottomSheet: () => void;
}

const BottomSheetContext = createContext<BottomSheetContextProps | undefined>(
  undefined
);

interface BottomSheetProviderProps {
  children: ReactNode;
}

export const BottomSheetProvider: React.FC<BottomSheetProviderProps> = ({
  children,
}) => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const [content, setContent] = useState<ReactNode>(null);
  const [snapPoints, setSnapPoints] = useState<Array<string | number>>([
    "25%",
    "50%",
    "90%",
  ]);

  const openBottomSheet = (
    newContent: React.ReactNode,
    points: Array<string | number> | undefined
  ) => {
    if (!bottomSheetRef.current) {
      console.error("BottomSheet is not initialized!");
      return;
    }
    if (!points) return;
    setSnapPoints(points);
    setContent(newContent);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
      {children}
      {/* <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
        backgroundStyle={styles.bottomSheetBackground}
      >
        {content}
      </BottomSheet> */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["25%", "50%", "90%"]}
        index={-1}
        enablePanDownToClose
        backdropComponent={(props) => <BottomSheetBackdrop {...props} />}
      >
        <BottomSheetView>{content}</BottomSheetView>
      </BottomSheet>
    </BottomSheetContext.Provider>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
    backgroundColor: "green",
  },
  bottomSheetBackground: {
    backgroundColor: "white",
  },
});

export const useBottomSheet = (): BottomSheetContextProps => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("useBottomSheet must be used within a BottomSheetProvider");
  }
  return context;
};

export default BottomSheetProvider;
