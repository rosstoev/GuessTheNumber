import { Text, StyleSheet, Dimensions } from "react-native";

import color from "../../constants/color";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "openSansR",
    fontSize: deviceHeight < 660 ? 18 : 24,
    color: color.primary,
  },
});
