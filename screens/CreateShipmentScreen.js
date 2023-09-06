import {
	Image,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../config/theme";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const CreateShipmentScreen = () => {
	const { theme } = useContext(ThemeContext);
	let activeColors = colors[theme.mode];
	const navigation = useNavigation();

	const [modalVisible, setModalVisible] = useState(false);
	// State to store shipment information
	const [shipmentInfo, setShipmentInfo] = useState({
		senderName: "",
		recipientName: "",
		itemDescription: "",
	});

	const resetInputFields = () => {
		setShipmentInfo({
			senderName: "",
			recipientName: "",
			itemDescription: "",
		});
	};

	const handleCreateShipment = () => {
		// Handle the creation of the shipment here
		// You can send the shipmentInfo to your backend or perform any other actions
		console.log("Shipment Info:", shipmentInfo);

		// Display the modal
		setModalVisible(true);
	};

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
				Create Shipment
			</Text>
			<TextInput
				placeholder="Sender's Name"
				value={shipmentInfo.senderName}
				onChangeText={(text) =>
					setShipmentInfo({ ...shipmentInfo, senderName: text })
				}
				style={{
					backgroundColor: "white",
					width: 300,
					padding: 10,
					marginBottom: 20,
					borderRadius: 5,
				}}
			/>
			<TextInput
				placeholder="Recipient's Name"
				value={shipmentInfo.recipientName}
				onChangeText={(text) =>
					setShipmentInfo({ ...shipmentInfo, recipientName: text })
				}
				style={{
					backgroundColor: "white",
					width: 300,
					padding: 10,
					marginBottom: 20,
					borderRadius: 5,
				}}
			/>
			<TextInput
				placeholder='Item Description'
				value={shipmentInfo.itemDescription}
				onChangeText={(text) =>
					setShipmentInfo({ ...shipmentInfo, itemDescription: text })
				}
				style={{
					backgroundColor: "white",
					width: 300,
					padding: 10,
					marginBottom: 45,
					borderRadius: 5,
				}}
			/>
			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<TouchableOpacity
					onPress={() => {
						handleCreateShipment();
						resetInputFields(); // Reset input fields after booking
					}}
					style={{
						backgroundColor: activeColors.accent,
						paddingHorizontal: 20,
						paddingVertical: 10,
						borderRadius: 5,
						marginRight: 5, // Add marginRight for space
					}}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "bold",
							color: activeColors.primary,
						}}>
						Start Booking
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={{
						backgroundColor: activeColors.accent,
						paddingHorizontal: 20,
						paddingVertical: 10,
						borderRadius: 5,
						marginLeft: 5, // Add marginLeft for space
					}}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "bold",
							color: activeColors.primary,
						}}>
						Cancel Booking
					</Text>
				</TouchableOpacity>
			</View>

			{/* Success Modal */}
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					// Handle modal close if needed
					setModalVisible(false);
				}}>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}>
					<View
						style={{
							backgroundColor: "white",
							padding: 20,
							borderRadius: 10,
							alignItems: "center",
						}}>
						{/* Add the image here */}
						<Image
							source={require("../images/checked.png")} // Provide the correct path to your image
							style={{
								width: 60, // Adjust the width as needed
								height: 50, // Adjust the height as needed
								marginBottom: 20, // Add margin to separate image and text
							}}
						/>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Booking Placed Successfully!
						</Text>
						<TouchableOpacity
							onPress={() => {
								// Close the modal
								setModalVisible(false);
								// You can navigate to another screen here
							}}
							style={{
								marginTop: 20,
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
								Close
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default CreateShipmentScreen;
