import { Text, View, StyleSheet, Image, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";
import color from "../constants/color";

function GameOverScreen({ guessRounds, userNumber, onResetGame }) {
  const {height} = useWindowDimensions();

  let imageContainerStyle = {
    width: 300,
    height: 300,
    borderRadius: 150
  };

  if (height < 500) {
    imageContainerStyle = {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginTop: 10
    }
  }

  return (
    <View style={styles.componentContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageContainerStyle]}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.infoText}>
        Your phone needed
        <Text style={styles.highlight}> {guessRounds}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onResetGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    marginTop: 30,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: color.secondary500,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoText: {
    marginVertical: 25,
    fontFamily: "openSansB",
    fontSize: 20,
    textAlign: "center",
  },
  highlight: {
    color: color.secondary200,
  },
});
