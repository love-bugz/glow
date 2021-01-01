import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StyleGuide from "../StyleGuide";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.colors.background,
    alignItems: "center",
  },
  listContainer: {
    width: width - 40,
    backgroundColor: StyleGuide.colors.background3,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 16,
  },
  friendContainer: {
    width,
    borderBottomWidth: 1,
    borderBottomColor: StyleGuide.colors.text4,
    paddingTop: 24,
  },
  friend: {
    paddingLeft: 16,
    marginBottom: 8,
    fontSize: 16,
    color: StyleGuide.colors.text2,
  },
  addBtn: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: StyleGuide.colors.teal,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  addBtnTxt: {
    fontSize: 40,
    fontWeight: "400",
  },
});

const friends = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Sarah Smith",
  },
  {
    id: 3,
    name: "Jane Doe",
  },
];

interface ItemProps {
  item: { id: number; name: string };
}

interface FriendProps {
  name: string;
}

const Friend = ({ name }: FriendProps) => (
  <View style={styles.friendContainer}>
    <Text style={styles.friend}>{name}</Text>
  </View>
);

const FriendsListScreen = () => {
  const renderItem = ({ item }: ItemProps) => <Friend name={item.name} />;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.listContainer}>
        <FlatList
          data={friends}
          renderItem={renderItem}
          keyExtractor={(item) => item.name + item.id}
        />
      </ScrollView>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FriendsListScreen;
