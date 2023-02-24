import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import color from "../constants/color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ setSelectedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function onInputChange(enteredValue) {
    setEnteredNumber(enteredValue);
  }

  function resetInputNumber() {
    setEnteredNumber("");
  }

  function validateNumber() {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert("Invalid number", "The number you entered is invalid", [
        {
          text: "Apply",
          onPress: resetInputNumber,
          style: "destructive",
        },
      ]);
      return;
    }

    setSelectedNumber(number);
  }

  return (
    <View style={styles.mainContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter the Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={onInputChange}
        />
        <View style={styles.buttonContainer}>
          <View>
            <PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
          </View>
          <View>
            <PrimaryButton onPress={validateNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: color.primary,
    borderBottomWidth: 2,
    color: color.primary,
    textAlign: "center",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonElement: {
    flex: 1,
  },
});
