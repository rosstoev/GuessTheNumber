 import { Text, StyleSheet } from "react-native";

 import color from "../../constants/color";

 function InstructionText({children, style}){
    return <Text style={[styles.instructionText, style]}>{children}</Text>
 }

 export default InstructionText;

 const styles = StyleSheet.create({
    instructionText: {
      fontFamily: "openSansR",
        fontSize: 24,
        color: color.primary
      },
 })