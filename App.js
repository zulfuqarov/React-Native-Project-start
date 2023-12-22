import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import "react-native-gesture-handler";
import Home from "./screen/Drawer/Home";
import Login from "./screen/Drawer/Login";
import Register from "./screen/Drawer/Register";

export default function App() {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "black",
          },
          drawerLabelStyle: {
            color: "white",
            fontSize: 17,
          },
          drawerActiveBackgroundColor: "gray",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            headerShadowVisible: false,
            headerTintColor: "#FFFFFF",
            headerRight: () => (
              <Image
                className="w-[30px] h-[30px] mr-[10px] rounded-3xl"
                source={{
                  uri: "https://th.bing.com/th/id/OIP.GJ59ZsmQwHQ9pD8tCsnrnAHaHa?rs=1&pid=ImgDetMain",
                }}
              />
            ),
          }}
        />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
