import { View, Text, Button, Image } from "react-native";
import React from "react";
import Card from "../components/Card";

export default function Finish({ styles, changePage, confirmed, phone }) {
  const lastNum = parseInt(phone) % 10;
  const url = "https://picsum.photos/id/" + lastNum + "/100/100";
  if (confirmed == true) {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.largeText}>
            Thank you for signing up. Here's a picture for you (based on the
            last digit of your phone number).
          </Text>
          <View style={{justifyContent: "center", alignItems: "center", paddingBottom: 20 }}>
            <Image style={{height: 100, width: 100 }} source={{ uri: url }} />
          </View>
        </Card>
        <Button
          onPress={() => changePage("Starting")}
          title={"Start Again"}
          color={"blue"}
        ></Button>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.largeText}>Sorry to see you go.</Text>
          <Image style = {{width: '70%', height: undefined, aspectRatio: 1}} source={require("../assets/disappointed-face.png")}></Image>
        </Card>
        <Button
          onPress={() => changePage("Starting")}
          title={"Start Again"}
          color={"blue"}
        ></Button>
      </View>
    );
  }
}
