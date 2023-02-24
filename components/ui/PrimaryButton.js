import { Pressable, StyleSheet, Text, View } from "react-native";
import color from "../../constants/color";

function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressedButton] : styles.buttonInnerContainer}
        android_ripple={styles.buttonRipple}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: color.secondary,
    paddingVertical: 8,
    paddingHorizontal: 26,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'openSansR'
  },
  buttonRipple: {
    color: color.secondary200,
  },
  pressedButton: {
    opacity: 0.75,
  },
});
