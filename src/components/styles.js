import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  cardStyle: {
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width / 1.1,
    marginHorizontal: 20,
    borderRadius: 20,
    height: height / 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 8,
    marginLeft: 60,
    textAlign: "left",
  },
  cardDescription: {
    fontSize: 15,
    marginVertical: 6,
    marginLeft: 40,
    textAlign: "left",
    color: "green",
  },
  cardImage: {
    padding: 0,
    height: 80,
    width: 80,
  },
});

export const cardstyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: 400,
    height: 700,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modelcardImage: {
    height: 250,
    width: 150,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalProfile: {
    fontSize: 20,
    marginVertical: 16,
    fontWeight: "bold",
  },
  modalTextHeading: {
    fontSize: 20,
    marginVertical: 8,
    fontWeight: "bold",
  },
  modalText: {
    marginVertical: 8,
    textAlign: "center",
    fontSize: 20,
  },
});
