import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { colors } from "../../config/theme";

const CardComponent = ({ imageSource, title, description }) => {
	const { theme } = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: activeColors.secondary }]}>
			<Image style={styles.image} source={imageSource} />
			<View style={styles.contentContainer}>
				<Text
					style={[styles.title, { color: activeColors.text }]}
					numberOfLines={1}>
					{title}
				</Text>
				<Text
					style={[styles.description, { color: activeColors.tertiary }]}
					numberOfLines={2}>
					{description}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 200,
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 3,
		flexDirection: "column",
		margin: 10,
	},
	image: {
		width: 200,
		height: 100,
		borderRadius: 10,
	},
	contentContainer: {
		padding: 10,
		justifyContent: "center",
		flex: 1,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	description: {
		fontSize: 14,
		color: "#777",
		flexWrap: "wrap", // Add this line to wrap the text
		overflow: "hidden", // Add this line to hide overflowing text
		lineHeight: 18, // Add this line to improve line spacing
		maxHeight: 36, // Add this line to limit the number of lines to 2
	},
});

export default CardComponent;
