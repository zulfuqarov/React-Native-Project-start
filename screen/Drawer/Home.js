import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      className="w-full h-full"
      source={{
        uri: "https://img.freepik.com/premium-photo/set-burgers-with-beef-tomatoes-cheese-onions-salad-street-food-top-view-black-stone-background_187166-42884.jpg?w=2000",
      }}
    >
      <View className="justify-center items-center w-full h-full">
        <Text className="mx-[10px] text-white text-center">
          Hello, welcome to our restaurant page! To get more detailed
          information, please log in through the login page. If you don't have
          an account, you can register by visiting the registration section
        </Text>
        <View className="justify-center items-center mt-[30px]">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-white w-[120px] h-[40px] mb-[30px] rounded-[10px] justify-center items-center"
          >
            <Text className="text-black">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            className="bg-white w-[120px] h-[40px] rounded-[10px] justify-center items-center"
          >
            <Text className="text-black">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
