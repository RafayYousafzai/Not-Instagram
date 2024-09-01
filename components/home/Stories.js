import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={style.story} />
            <Text style={{ color: "white" ,fontSize:12}}>
              {story.user.length > 5
                ? story.user.slice(0, 6).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
        <Image />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 18,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
