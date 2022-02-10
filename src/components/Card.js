import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState } from "react";
import {
  View,
  Text,
  Picker,
  StyleSheet,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { styles, cardstyle } from "./styles";

export default function Card({ first_name, last_name, email, avatar }) {
  const data = {
    first_name,
    last_name,
    email,
    avatar,
  };
  function clickHandler(data) {
    console.log("this is click handler", data);
    setModalVisible(true);
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity style={styles.cardStyle}>
        <View
          style={[{ flexDirection: "row" }]}
          onClick={() => clickHandler(data)}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={cardstyle.centeredView}>
              <View style={cardstyle.modalView}>
                <Text style={cardstyle.modalProfile}>User Profile</Text>
                <Image
                  style={cardstyle.modelcardImage}
                  source={{ uri: avatar }}
                />
                <Text style={cardstyle.modalTextHeading}>User</Text>
                <Text style={cardstyle.modalText}>
                  Hello {first_name} {last_name}
                </Text>
                <Text style={cardstyle.modalTextHeading}>Email</Text>
                <Text style={cardstyle.modalText}>{email}</Text>
                <Pressable
                  style={[cardstyle.button, cardstyle.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={cardstyle.textStyle}>Hide</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
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
