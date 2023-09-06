import {
	Button,
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext, useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { colors } from "../../config/theme";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const FeaturedCardComponent = ({ imageSource, title, description, item }) => {
	const { theme } = useContext(ThemeContext);
	let activeColors = colors[theme.mode];
	const navigation = useNavigation(); // Initialize navigation hook

	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: activeColors.secondary }]}
			onPress={toggleModal}>
			<Image style={styles.image} source={imageSource} />
			<View style={styles.textContainer}>
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

				<Modal
					animationType='slide'
					transparent={true}
					visible={isModalVisible}
					onRequestClose={toggleModal}>
					<View style={styles.modalContainer}>
						<View
							style={[
								styles.modalContent,
								{ backgroundColor: activeColors.primary },
							]}>
							<Text style={[styles.modalTitle, { color: activeColors.text }]}>
								{title}
							</Text>
							<Text
								style={[
									styles.modalDescription,
									{ color: activeColors.tertiary },
								]}>
								{description}
							</Text>
							<Button
								title='Start Booking'
								onPress={() => {
									toggleModal();
									navigation.navigate("CreateShipment"); // Navigate to the "createshipment" screen
								}}
							/>
						</View>
					</View>
				</Modal>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 3,
		padding: 10,
		width: "48%",
		marginBottom: 20,
	},
	image: {
		width: "100%",
		height: 150,
		borderRadius: 10,
		marginBottom: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 5,
	},
	description: {
		fontSize: 14,
		color: "#7a7a7a",
	},

	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalContent: {
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		padding: 40,
		width: "80%",
	},
	modalTitle: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 25,
	},
	modalDescription: {
		fontSize: 16,
		color: "#7a7a7a",
		marginBottom: 25,
	},
});

export default FeaturedCardComponent;
