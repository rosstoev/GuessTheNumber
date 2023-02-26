import { View, Text, StyleSheet } from "react-native";
import color from "../../constants/color";
import Color from "../../constants/color";

function NumberContainer({children, style}){
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: Color.primary,
        borderRadius: 8,
        marginTop: 20
    },
    numberText: {
        fontSize: 20,
        fontWeight: "bold",
        color: color.primary
    }
})