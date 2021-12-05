import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/screens/Login";
import { Home } from "./src/screens/Home";
import { Recipe } from "./src/screens/Recipe";
import { Tabs } from "./src/navigation/Tabs";
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import { env } from "./src/config";
import { cache } from "./src/graphql/cache";
import { resolver } from "./src/graphql/resolver";
import { Loading } from "./src/components/Loading";
import { persistCache } from "apollo-cache-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { PersistedData, PersistentStorage } from "apollo-cache-persist/types";

const Stack = createStackNavigator();

const App = () => {
    const [client, setClient] = useState<any>(null);

    useEffect(() => {
        persistCache({
            cache: cache,
            storage: AsyncStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
            trigger: "background"
        }).then(() => {
            setClient(new ApolloClient({
                uri: env.GRAPHQL_URL,
                cache: cache,
                resolvers: resolver
            }));
        });
    }, []);

    if (!client) {
        return <Loading/>;
    }

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
