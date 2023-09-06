import { Button, ScrollView, StyleSheet, View } from "react-native";

import React from "react";

const ScrollableButtons = () => {
	const buttons = ["Button 1", "Button 2", "Button 3", "Button 4"];

	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{buttons.map((buttonText, index) => (
				<View style={styles.buttonContainer} key={index}>
					<Button
						title={buttonText}
						color='#007AFF'
						onPress={() => handleButtonPress(buttonText)}
					/>
				</View>
			))}
		</ScrollView>
	);
};

const handleButtonPress = (buttonText) => {
	// Handle button press here, e.g., navigate to a different screen
	console.log(`Button "${buttonText}" pressed`);
};

const styles = StyleSheet.create({
	buttonContainer: {
		marginRight: 10, // Add spacing between buttons
	},
});

export default ScrollableButtons;
