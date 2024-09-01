import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import { firebase } from "../../firebase/firebase";

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Signed Out");
  } catch (error) {
    console.error(error);
  }
};

const Header = ({ navigation }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image
          style={style.logo}
          source={require("../../assets/instagram-logo.png")}
        />
      </TouchableOpacity>
      <View style={style.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            style={style.icon}
            source={require("../../assets/instagram-icon-more.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={style.icon}
            source={require("../../assets/instagram-icon-heart.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.unreadBadge}>
            <Text style={style.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={style.icon}
            source={require("../../assets/instagram-icon-chat-bubble.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    tintColor: "white",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 8,
    tintColor: "white",
  },
  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 15,
    bottom: 14,
    width: 25,
    height: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
    fontSize: 10,
  },
});

export default Header;
