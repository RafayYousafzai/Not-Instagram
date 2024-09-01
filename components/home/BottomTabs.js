import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { Profiler, useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: require("../../assets/interface-bottom-tab-icon-home-active.png"),
    inactive: require("../../assets/interface-bottom-tab-icon-home-inactive.png"),
  },
  {
    name: "Search",
    active: require("../../assets/interface-bottom-tab-icon-search-active.png"),
    inactive: require("../../assets/interface-bottom-tab-icon-search-inactive.png"),
  },
  {
    name: "Reels",
    active: require("../../assets/interface-bottom-tab-icon-play-alt-active.png"),
    inactive: require("../../assets/interface-bottom-tab-icon-play-alt-inactive.png"),
  },
  {
    name: "Shop",
    active: require("../../assets/interface-bottom-tab-icon-shop-active.png"),
    inactive: require("../../assets/interface-bottom-tab-icon-shop-inactive.png"),
  },
  {
    name: "Profile",
    active: require("../../assets/interface-bottom-tab-icon-user-active.png"),
    inactive: require("../../assets/interface-bottom-tab-icon-user-unactive.png"),
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity
      onPress={() => {
        setActiveTab(icon.name);
      }}
    >
      <Image
        source={activeTab === icon.name ? icon.active : icon.inactive}
        style={[
          styles.icon,
          // icon.name === "Profile" ? styles.profilePic() : null,
          // activeTab === "Profile" && icon.name === activeTab
          //   ? styles.profilePic(activeTab)
          //   : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    padding: 10,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: "white",
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
