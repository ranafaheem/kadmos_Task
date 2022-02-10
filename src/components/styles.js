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
