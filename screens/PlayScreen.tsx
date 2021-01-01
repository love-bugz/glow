import React from "react";
import { View, StyleSheet } from "react-native";
import StyleGuide from "../StyleGuide";

const BALL_SIZE = 60;
const TEAL = "#03DAC6";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.background,
    alignItems: "center",
  },
  ball: {
    margin: BALL_SIZE,
    height: BALL_SIZE,
    width: BALL_SIZE,
    borderRadius: BALL_SIZE / 2,
    backgroundColor: TEAL,
    borderWidth: 1,
    borderColor: TEAL,
    shadowColor: TEAL,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
  },
});

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ball}></View>
    </View>
  );
};

export default PlayScreen;
