import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Page() {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Valent</Text>
        <Text style={styles.subtitle}>The Art of living a Life in Two</Text>
      </View>
      <Link href="/login" asChild>
      <Button title="login"></Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
