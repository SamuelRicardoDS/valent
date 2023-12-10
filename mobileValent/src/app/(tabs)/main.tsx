import { Button, StyleSheet, Text, View } from "react-native";

export default function Main() {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Valent</Text>
                <Text style={styles.subtitle}>Te amo 2 </Text>
            </View>
            <Button title="login"></Button>
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