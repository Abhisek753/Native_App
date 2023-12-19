import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ProfilePage = ({ navigation }) => {
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        width: "100%",
      }}
    >
      <Text
        style={{
          marginBottom: 20,
          fontWeight: "600",
          fontSize: 25,
          color: "white",
          textAlign: "center",
          padding: 10,
          margin: 5,
        }}
      >
        This is a bottom sheet, launched by tapping the lottie or swiping up
      </Text>
      <View style={{ flexDirection: "row" }}></View>
    </View>
  );
};

export default ProfilePage;
