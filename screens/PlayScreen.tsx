import React, { SyntheticEvent } from "react";
import { StyleSheet, Pressable, Dimensions, View } from "react-native";
import StyleGuide from "../StyleGuide";

const { height, width } = Dimensions.get("window");

const BALL_SIZE = 60;
const TEAL = StyleGuide.colors.teal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.background,
    alignItems: "center",
    paddingTop: 100,
  },
  gameContainer: {
    height: height - 100,
    width: width - 24,
  },
  ball: {
    transform: [
      { translateY: 644 - BALL_SIZE },
      { translateX: 366 - BALL_SIZE },
    ],
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
  console.log("WIDTH:", width - 24);
  console.log("HEIGHT: ", height - 200);
  return (
    <Pressable style={styles.container}>
      <View style={styles.gameContainer}>
        <Pressable
          style={styles.ball}
          onPressOut={onLeaveHomeButton}
        ></Pressable>
      </View>
    </Pressable>
  );

  function onLeaveHomeButton() {
    console.log("Left home");
  }
};

export default PlayScreen;
