import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import StyledText from "../texts/StyledText";
import { ThemeContext } from "../../context/ThemeContext";
import { colors } from "../../config/theme";

//receives font size and weight as input

const SettingsItem = ({ children, label }) => {
	const { theme } = useContext(ThemeContext);
	let activeColors = colors[theme.mode];
	return (
		<View
			style={[
				{
					backgroundColor: activeColors.secondary,
				},
				styles.settingsItem,
			]}>
			<StyledText style={[{ color: activeColors.tertiary }, styles.label]}>
				{label}
			</StyledText>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	settingsItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 60,
		paddingHorizontal: 25,
		marginBottom: 2,
	},
	label: {
		fontStyle: "italic",
	},
});

export default SettingsItem;
