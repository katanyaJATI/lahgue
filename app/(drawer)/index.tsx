import { StyleSheet, View } from "react-native";

import { Text } from "../components";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello I'm Janaka~</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
