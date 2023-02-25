import { View, Text, StyleSheet } from "react-native";
import color from "../../constants/color";
import Color from "../../constants/color";

function NumberContainer({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: Color.primary,
        borderRadius: 8,
        margin: 20
    },
    numberText: {
        fontSize: 20,
        fontWeight: "bold",
        color: color.primary
    }
})