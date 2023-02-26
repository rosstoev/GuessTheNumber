import { Text, StyleSheet, Dimensions } from "react-native";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    title: {
        fontSize: deviceHeight < 660 ? 18 : 24,
        fontFamily: "openSansB",
        color: "white",
        padding: 10,
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10
    }
})
