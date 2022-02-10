import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import UsersScreen from "./navigationScreen/UsersScreen";
import SettingsScreen from "./navigationScreen/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";

import { GlobalLanguage } from "../App";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  const { appLang } = useContext(GlobalLanguage);
  console.log("this is Mainscreen", appLang);
  // Screen Names
  let usersName = "Users";
  let settingsName = "Settings";
  usersName = appLang.translations.Users;
  settingsName = appLang.translations.Setting;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Users"}
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
