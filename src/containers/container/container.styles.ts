import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const os = Platform.OS;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: os === "android" ? 30 : 0,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
