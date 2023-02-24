import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import GameScreen from "./screens/GameScreen";
import color from "./constants/color";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [isGameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    openSansR: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansB: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function setSelectedNumberHandler(number) {
    setSelectedNumber(number);
    setGameOver(false);
  }

  function gameOverHandler(guessedRounds) {
    setGameOver(true);
    setGuessRounds(guessedRounds);
  }

  let screen = <StartGameScreen setSelectedNumber={setSelectedNumberHandler} />;

  if (selectedNumber) {
    screen = (
      <GameScreen userNumber={selectedNumber} onGameOver={gameOverHandler} />
    );
  }

  function resetGameHandler() {
    setSelectedNumber(null);
    setGameOver(false);
    setGuessRounds(0);
  }

  if (isGameOver && selectedNumber) {
    screen = <GameOverScreen guessRounds={guessRounds} userNumber={selectedNumber} onResetGame={resetGameHandler} />;
  }

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
        <LinearGradient
          colors={[color.secondary300, color.primary]}
          style={styles.rootScreen}
        >
          <ImageBackground
            source={require("./assets/images/background.png")}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
          >
            <View style={styles.rootScreen} onLayout={onLayoutRootView}>
              <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </View>
          </ImageBackground>
        </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
