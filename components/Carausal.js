import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Swiper from "react-native-swiper";
import frone from "../assets/frameone.png";
import fronesecond from "../assets/frametwo.png";
import fronethird from "../assets/framethree.png";
import logo from "../assets/Avatar.png";
import LottieView from "lottie-react-native";

const CarausalPage = ({ navigation }) => {
  var styles = {
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      heigth: "100%",
    },
    slide2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    slide3: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold",
    },
  };
  const handlePageChange = () => {
    navigation.navigate("Profile");
  };

  const handlePageDataChange=()=>{
    navigation.navigate("ProfileData");

  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <View>
          <Image style={{ width: 30, height: 30 }} source={logo} />
        </View>
        <Text style={{ color: "white", fontSize: 16 }}>user@example.com</Text>

        <TouchableOpacity >
          <Text style={{ color: "white", fontSize: 16 }} onPress={() => navigation.navigate("Login")}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Swiper style={styles.wrapper} showsButtons loop={false}>
          <View testID="Hello" style={styles.slide1}>
            {/* <Image source={ frone } style={{ width: 200, height: 200, backgroundColor: 'transparent' }}/> */}
            <TouchableOpacity
              // style={styles.slide}
              onPress={handlePageChange}
            >
              <LottieView
                source={require("../Lottie/lottiethree.json")}
                autoPlay
                loop
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: "transparent",
                }}
              />
            </TouchableOpacity>
          </View>
          <View testID="Beautiful" style={styles.slide2}>
          <TouchableOpacity
              // style={styles.slide}
              onPress={handlePageDataChange}
            >
            <LottieView
              source={require("../Lottie/lottietwo.json")}
              autoPlay
              loop
              style={{
                width: 200,
                height: 200,
                backgroundColor: "transparent",
              }}
            />
            </TouchableOpacity>
          </View>
          <View testID="Simple" style={styles.slide3}>
          <TouchableOpacity
              // style={styles.slide}
              onPress={handlePageDataChange}
            >
            <LottieView
              source={require("../Lottie/lottieone.json")}
              autoPlay
              loop
              style={{
                width: 200,
                height: 200,
                backgroundColor: "transparent",
              }}
            />
            </TouchableOpacity>
          </View>
        </Swiper>
      </View>

      <View style={{ height: 50 }} />

      <View
        style={{ backgroundColor: "gray", padding: 16, alignItems: "center" }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Footer Content</Text>
      </View>
    </ScrollView>
  );
};

export default CarausalPage;
