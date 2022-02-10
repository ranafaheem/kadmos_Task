import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import { View, Text, Picker, StyleSheet, Image } from "react-native";
import { styles } from "./styles";
export default function Card({ id, first_name, last_name, email, avatar }) {
  return (
    <>
      <TouchableOpacity style={styles.cardStyle}>
        <View
          style={[{ flexDirection: "row" }]}
          onClick={() => {
            alert("Hello from here");
          }}
        >
          <View>
            <Image style={styles.cardImage} source={{ uri: avatar }} />
          </View>
          <View>
            <Text style={styles.cardTitle}>
              {first_name} {last_name}
            </Text>
            <Text style={styles.cardDescription}>{email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
