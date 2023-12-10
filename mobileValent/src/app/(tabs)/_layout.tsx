import { Tabs } from "expo-router";

export default function TabRoutesLayout() {
    return(
        <Tabs>
            <Tabs.Screen
                name="login"
                options={{
                    title: "login",
                }}
            />
            <Tabs.Screen
                name="main"
                options={{
                    title: "main",
                }}
            />
        </Tabs>
    )
}