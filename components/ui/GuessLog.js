import { View, Text, StyleSheet } from "react-native";

import color from "../../constants/color";

function GuessLog({ roundNumber, guessedNumber }) {
  return (
    <View style={styles.logItem}>
      <Text style={styles.logText}>#{roundNumber}</Text>
      <Text style={styles.logText}>Opponent's Guess: {guessedNumber}</Text>
    </View>
  );
}

export default GuessLog;

const styles = StyleSheet.create({
  logItem: {
    padding: 10,
    marginVertical: 5,
    color: color.secondary500,
    backgroundColor: color.primary,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: color.secondary300,
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-between"
  },
  logText: {
    fontFamily: "openSansR",
  },
});
