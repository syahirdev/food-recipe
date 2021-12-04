import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/screens/Login";
import { Home } from "./src/screens/Home";
import { Recipe } from "./src/screens/Recipe";
import { Tabs } from "./src/navigation/Tabs";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { env } from "./src/config";
import { BOOKMARK_FRAGMENT } from "./src/graphql";
import { cache } from "./src/graphql/cache";
import { resolver } from "./src/graphql/resolver";

const Stack = createStackNavigator();

const client = new ApolloClient({
    uri: env.GRAPHQL_URL,
    cache: cache,
    resolvers: resolver
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Home"}>
                    <Stack.Screen name={"Login"} component={Login}/>
                    <Stack.Screen name={"Home"} component={Tabs}/>
                    <Stack.Screen name={"Recipe"} component={Recipe}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    );
};

export default App;
