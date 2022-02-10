import React, { useState, useContext } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import { GlobalLanguage } from "../../App";
import translations from "../languages/translations";
export default function SettingsScreen() {
  const { appLang, setLang } = useContext(GlobalLanguage);
  const [selectedValue, setSelectedValue] = useState(appLang.language);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Setting Screen</Text>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
            setLang({ itemValue, translations: translations[itemValue] });
          }}
        >
          <Picker.Item label="English" value="Eng" />
          <Picker.Item label="German" value="DE" />
        </Picker>
        <Text>Language Selected is {selectedValue}</Text>
        {/* <Text>{appLang.translations.Users}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});
