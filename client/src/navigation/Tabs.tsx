import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={Home}/>
            <Tab.Screen name={"Search"} component={Home}/>
            <Tab.Screen name={"Bookmark"} component={Home}/>
            <Tab.Screen name={"Settings"} component={Home}/>
        </Tab.Navigator>
    );
};
