import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import UsersScreen from "./navigationScreen/UsersScreen";
import SettingsScreen from "./navigationScreen/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
// Screen Names
const usersName = "Users";
const settingsName = "Settings";
export default function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={usersName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === usersName) {
              iconName = focused ? "people-outline" : "people-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings-outline" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={usersName} component={UsersScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
