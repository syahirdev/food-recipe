import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { TabIcon } from "../components/TabIcon";
import { Search } from "../screens/Search";

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
                name={"Bookmark"}
                component={Home}
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
                            icon={"settings"}
                            focused={focused}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};
