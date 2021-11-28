import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { TabIcon } from "../components/TabIcon";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
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
                component={Home}
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
