import React from "react";
import { View, Text } from "react-native";
import { AuthNavigation } from "./stacks/AuthNavigation.js";


function AppNavigation() {
    return (
        <View>
            <Text>AppNavigation</Text>
        </View>
    )
}

export function HandlerNavigation() {
    const user = null;

    return user ? <AppNavigation /> : <AuthNavigation />
}