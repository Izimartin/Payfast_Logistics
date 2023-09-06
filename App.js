import * as SplashScreen from "expo-splash-screen";

import React, { useEffect, useState } from "react";
import { getData, storeData } from "./config/asyncStorage";

import { Appearance } from "react-native";
import CreateShipmentScreen from "./screens/CreateShipmentScreen";
import Footer from "./components/Footer";
import ListingScreen from "./screens/ListingScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./screens/RegisterScreen";
import { ThemeContext } from "./context/ThemeContext";
import { createStackNavigator } from "@react-navigation/stack";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const App = () => {
	const [theme, setTheme] = useState({ mode: Appearance.getColorScheme() });

	const updateTheme = (newTheme) => {
		let mode;
		if (!newTheme) {
			mode = theme.mode === "dark" ? "light" : "dark";
			newTheme = { mode };
		}
		setTheme(newTheme);
		storeData("homeTheme", newTheme);
	};

	const fetchStoredTheme = async () => {
		try {
			const themeData = await getData("homeTheme");
			if (themeData) {
				updateTheme(themeData);
			}
		} catch ({ message }) {
			alert(message);
		} finally {
			await setTimeout(() => SplashScreen.hideAsync(), 1000);
		}
	};

	useEffect(() => {
		fetchStoredTheme();

		Appearance.addChangeListener(({ colorScheme }) => {
			updateTheme();
			setTheme({ mode: colorScheme });
		});
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, updateTheme }}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Login'>
					<Stack.Screen
						options={{ headerShown: false }}
						name='Login'
						component={LoginScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name='Register'
						component={RegisterScreen}
					/>
					<Stack.Screen
						name='CreateShipment'
						component={CreateShipmentScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='ListingScreen'
						component={ListingScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='Footer'
						component={Footer}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeContext.Provider>
	);
};

export default App;
