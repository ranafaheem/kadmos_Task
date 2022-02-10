import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Card from "../components/Card";
export default function UsersScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function get API Data
  const getUsers = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is User Screen</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <>
              <Card
                first_name={item.first_name}
                last_name={item.last_name}
                email={item.email}
                avatar={item.avatar}
              />
            </>
          )}
        />
      )}
    </View>
  );
}
