import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const [Register, SetRegister] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  const ChangeInput = (name, value) => {
    SetRegister({
      ...Register,
      [name]: value,
    });
    setErrRegister({
      ...ErrRegister,
      [name]: false,
    });
  };

  const [ErrRegister, setErrRegister] = useState({
    FirstName: false,
    LastName: false,
    Email: false,
    Password: false,
  });

  const CheckInput = () => {
    for (const key in Register) {
      if (Register[key].trim() === "") {
        setErrRegister((prevErrRegister) => ({
          ...prevErrRegister,
          [key]: true,
        }));
      }
    }
  };

  const CheckValue = () => {
    if (Object.keys(Register).every((key) => Register[key].trim() !== "")) {
      return true;
    } else {
      return false;
    }
  };

  const CountunioBtn = () => {
    if (CheckValue()) {
      navigation.navigate("Login", { RegisterData: Register });
    } else {
      CheckInput();
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <TouchableWithoutFeedback
        className="w-full h-full"
        onPress={Keyboard.dismiss}
      >
        <View className=" bg-black w-full h-full justify-center">
          <View className="mx-[20px]">
            <View>
              <Text className="text-[22px] text-white">
                Welcome Reustorant!
              </Text>
              <Text className="text-gray-400 pt-[5px]">
                Register in to your account
              </Text>
            </View>
            <View className="py-[20px]">
              <View className="flex flex-row justify-between">
                <TextInput
                  onChangeText={(text) => ChangeInput("FirstName", text)}
                  value={Register.FirstName}
                  placeholderTextColor="gray"
                  placeholder="First Name"
                  className={`h-[40px]  w-[49%] text-white  bg-gray-700 rounded-[10px] text-center text-[17px] ${
                    ErrRegister.FirstName
                      ? "border-[1px] border-rose-800"
                      : "border-[1px] border-green-800"
                  }`}
                />
                <TextInput
                  onChangeText={(text) => ChangeInput("LastName", text)}
                  value={Register.LastName}
                  placeholderTextColor="gray"
                  placeholder="Last Name"
                  className={`h-[40px] w-[49%] text-white bg-gray-700  rounded-[10px] text-center text-[17px] ${
                    ErrRegister.LastName
                      ? "border-[1px] border-rose-800"
                      : "border-[1px] border-green-800"
                  }`}
                />
              </View>
              <TextInput
                onChangeText={(text) => ChangeInput("Email", text)}
                value={Register.Email}
                placeholderTextColor="gray"
                keyboardType="email-address"
                placeholder="Email"
                className={`h-[40px] w-[100%] mt-[10px] text-white bg-gray-700  rounded-[10px] text-center text-[19px] ${
                  ErrRegister.Email
                    ? "border-[1px] border-rose-800"
                    : "border-[1px] border-green-800"
                }`}
              />
              <TextInput
                onChangeText={(text) => ChangeInput("Password", text)}
                value={Register.Password}
                placeholderTextColor="gray"
                secureTextEntry={true}
                placeholder="password"
                className={`h-[40px] mt-[10px] text-white w-[100%] bg-gray-700  rounded-[10px] text-center text-[19px] ${
                  ErrRegister.Password
                    ? "border-[1px] border-rose-800"
                    : "border-[1px] border-green-800"
                }`}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={CountunioBtn}
                className="w-[full] h-[50px] bg-blue-600 mt-[10px] rounded-[10px] justify-center items-center"
              >
                <Text className="text-white text-[19px] font-bold">
                  Countinue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Register;
