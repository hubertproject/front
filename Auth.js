import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Update from "./DrawerScreens/Update";
import TimeTable from "./BottomScreens/TimeTable";
import Calendar from "./DrawerScreens/Calendar";
import Quiz from "./DrawerScreens/Quiz";
import Attendance from "./DrawerScreens/Attendance";
import Fees from "./DrawerScreens/Fees";
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
import Home from "./BottomScreens/Home";
// import CustomDrawer from "./Navigation/CustomDrawer";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Quiz"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Update" component={Update} />
      <Stack.Screen name="TimeTable" component={TimeTable} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Fees" component={Fees} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="Quiz" component={Quiz} />
      

    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default Auth;
