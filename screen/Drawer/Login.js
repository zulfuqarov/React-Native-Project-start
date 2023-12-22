import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const Login = () => {
  const route = useRoute();
  const params = route.params;

  if (!params || !params.RegisterData) {
    return (
      <View className="justify-center items-center">
        <Text>Qeydiyatdan kecin</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      className="w-full h-full"
      onPress={Keyboard.dismiss}
    >
      <View className=" bg-black w-full h-full justify-center">
        <View className="mx-[20px]">
          <View>
            <Text className="text-[22px] text-white">Welcome Reustorant!</Text>
            <Text className="text-gray-400 pt-[5px]">
              Sign in to your account
            </Text>
          </View>
          <View className="py-[20px]">
            <TextInput
              placeholderTextColor="gray"
              keyboardType="email-address"
              placeholder="Email"
              className="h-[40px] w-[100%] text-white bg-gray-700 rounded-[10px] text-center text-[19px] "
            />
            <TextInput
              placeholderTextColor="gray"
              secureTextEntry={true}
              placeholder="password"
              className="h-[40px] mt-[10px] text-white w-[100%] bg-gray-700 rounded-[10px] text-center text-[19px]"
            />
          </View>
          <View>
            <View className="w-[100%] items-end justify-center">
              <TouchableOpacity>
                <Text className="text-gray-400 text-center">
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="w-[full] h-[50px] bg-blue-600 mt-[10px] rounded-[10px] justify-center items-center">
              <Text className="text-white text-[19px] font-bold">
                Countinue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
