import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../config/theme";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const ShipmentsScreen = () => {
	const { theme } = useContext(ThemeContext);
	let activeColors = colors[theme.mode];
	const navigation = useNavigation();

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: activeColors.primary,
			}}>
			<Text
				style={{
					fontSize: 24,
					fontWeight: "bold",
					color: activeColors.tertiary,
					marginBottom: 20,
				}}>
				Your Shipments
			</Text>
			<Text
				style={{
					fontSize: 16,
					color: activeColors.text,
					marginBottom: 10,
					textAlign: "center",
				}}>
				You have no shipments at the moment. Start shipping now!
			</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate("CreateShipment")}
				style={{
					backgroundColor: activeColors.accent,
					paddingHorizontal: 20,
					paddingVertical: 10,
					borderRadius: 5,
				}}>
				<Text
					style={{
						fontSize: 16,
						fontWeight: "bold",
						color: activeColors.primary,
					}}>
					Create Shipment
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ShipmentsScreen;
