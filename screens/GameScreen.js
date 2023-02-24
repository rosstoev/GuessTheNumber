import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/ui/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import color from "../constants/color";
import GuessLog from "../components/ui/GuessLog";

function generateRandomBetween(min, max, exclude) {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minNumber = 1;
let maxNumber = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessLog, setGuessLog] = useState([initialGuess]);

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(guessLog.length);
    }
  }, [userNumber, currentGuess, onGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  function guessNumberHandler(direction) {
    // direction => "lower", "higher"
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", "You know that this is wrong", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);

      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    }

    if (direction === "greater") {
      minNumber = currentGuess + 1;
    }

    let newRandomNumber = generateRandomBetween(
      minNumber,
      maxNumber,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
    setGuessLog((currentlogs) => [newRandomNumber, ...currentlogs]);
  }

  const guessLogLength = guessLog.length;

  return (
    <View style={styles.gameContainer}>
      <View>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumberHandler.bind(this, "lower")}>
              <Ionicons name="md-remove-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumberHandler.bind(this, "greater")}>
              <Ionicons name="md-add-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.logContainer}>
        <FlatList
          data={guessLog}
          renderItem={(itemData) => <GuessLog roundNumber={guessLogLength - itemData.index} guessedNumber={itemData.item}/>}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 50,
  },
  instructionText: {
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  logContainer: {
    flex: 1,
    marginTop: 20,
    height: 40
  }
});
