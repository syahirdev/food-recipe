/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .connect();

AppRegistry.registerComponent(appName, () => App);
