import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/screens/Login";
import { Home } from "./src/screens/Home";
import { Recipe } from "./src/screens/Recipe";
import { Tabs } from "./src/navigation/Tabs";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Login"}>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"Home"} component={Tabs}/>
                <Stack.Screen name={"Recipe"} component={Recipe}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
