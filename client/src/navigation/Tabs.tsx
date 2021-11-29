import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { TabIcon } from "../components/TabIcon";
import { Search } from "../screens/Search";
import { Bookmark } from "../screens/Bookmark";
import { AddRecipe } from "../screens/AddRecipe";

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    return (
        // @ts-ignore
        <Tab.Navigator tabBarOptions={{
            showLabel: false
        }}>
            <Tab.Screen
                name={"Home"}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            icon={"home"}
                            focused={focused}/>
                    )
                }}
            />
            <Tab.Screen
                name={"Search"}
                component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            icon={"search"}
                            focused={focused}/>
                    )
                }}
            />
            <Tab.Screen
                name={"Add"}
                component={AddRecipe}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            icon={"plus"}
                            focused={focused}/>
                    )
                }}
            />
            <Tab.Screen
                name={"Bookmark"}
                component={Bookmark}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            icon={"bookmark"}
                            focused={focused}/>
                    )
                }}
            />
            <Tab.Screen
                name={"Settings"}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            icon={"user"}
                            focused={focused}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};
