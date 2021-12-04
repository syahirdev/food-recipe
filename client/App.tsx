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

const Stack = createStackNavigator();

const client = new ApolloClient({
    uri: env.GRAPHQL_URL,
    cache: new InMemoryCache({
        typePolicies: {
            Recipe: {
                fields: {
                    isBookmark: {
                        read(isBookmark = true) {
                            return isBookmark;
                        }
                    }
                }
            }
        }
    }),
    resolvers: {
        Mutation: {
            setBookmark(_root, args, {client, cache}) {
                const recipeId = cache.identify({
                    __typename: "Recipe",
                    id: args.recipeId
                });

                const {isBookmark} = client.readFragment({
                    fragment: BOOKMARK_FRAGMENT,
                    id: recipeId
                });

                client.writeFragment({
                    fragment: BOOKMARK_FRAGMENT,
                    id: recipeId,
                    data: {
                        isBookmark: !isBookmark
                    }
                });
            }
        }
    }
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
