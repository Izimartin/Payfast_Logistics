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

const CardComponent = ({ imageSource, title, description }) => {
	const { theme } = useContext(ThemeContext);
	const activeColors = colors[theme.mode];

	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: activeColors.secondary }]}
			onPress={toggleModal}>
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
						<Button title='Close' onPress={toggleModal} />
					</View>
				</View>
			</Modal>
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
		flexDirection: "row",
		margin: 10,
	},
	image: {
		width: 100,
		height: 100,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
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
		flexWrap: "wrap",
		overflow: "hidden",
		lineHeight: 18,
		maxHeight: 36,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalContent: {
		borderRadius: 10,
		padding: 20,
		width: "80%",
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	modalDescription: {
		fontSize: 16,
	},
});

export default CardComponent;
