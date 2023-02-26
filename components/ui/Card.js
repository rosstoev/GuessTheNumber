import { View, StyleSheet } from "react-native"

import color from "../../constants/color";

function Card({children}){
    return <View style={styles.cardContainer}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        padding: 16,
        backgroundColor: color.secondary500,
        borderRadius: 8,
        elevation: 4,
      },
})