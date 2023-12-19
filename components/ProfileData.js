import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getStoredFormData();
  }, []);

  const getStoredFormData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("formData");

      if (storedData !== null) {
        const formData = JSON.parse(storedData);
        console.log("Form data retrieved from local storage:", formData);
        setData(formData)
      } else {
        console.log("No form data found in local storage");
      }
    } catch (error) {
      console.error("Error retrieving form data from local storage:", error);
    }
  };

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
          padding: 15,
          margin: 5,
        }}
      >
        This is a webview, launched by {data?.firstName}. They are {data?.age}yrs old
      </Text>
      <View style={{ flexDirection: "row" }}></View>
    </View>
  );
};

export default ProfileData;
