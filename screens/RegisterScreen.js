import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext, useState } from "react";

import CustomButton from "../components/CustomButton";
import DatePicker from "react-native-date-picker";
import { ImageBackground } from "react-native";
import InputField from "../components/InputField";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../config/theme";

const RegisterScreen = ({ navigation }) => {
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);
	const [dobLabel, setDobLabel] = useState("Date of Birth");

	const { theme } = useContext(ThemeContext);
	let activeColors = colors[theme.mode];
	return (
		<ImageBackground
			source={require("../images/slide2.png")} // Set your background image here
			style={{
				flex: 1,
				resizeMode: "cover", // Cover the entire screen
				justifyContent: "center",
			}}>
			<SafeAreaView
				style={{
					flex: 1,
					justifyContent: "center",
				}}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ paddingHorizontal: 25, marginTop: 50 }}>
					<View style={{ paddingHorizontal: 25, marginTop: 60 }}></View>

					{/* <View style={{ paddingHorizontal: 25, marginTop: 60 }}>
					<View style={{ alignItems: "center" }}></View> */}

					<Text
						style={{
							fontSize: 28,
							fontWeight: "500",
							color: activeColors.tint,
							marginBottom: 30,
						}}>
						Register
					</Text>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: 30,
						}}>
						<TouchableOpacity
							onPress={() => {}}
							style={{
								backgroundColor: activeColors.secondary,
								borderRadius: 10,
								paddingHorizontal: 30,
								paddingVertical: 10,
							}}>
							<Image
								source={require("../images/google.png")}
								style={{ height: 24, width: 24 }}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {}}
							style={{
								backgroundColor: activeColors.secondary,
								borderRadius: 10,
								paddingHorizontal: 30,
								paddingVertical: 10,
							}}>
							<Image
								source={require("../images/facebook.png")}
								style={{ height: 24, width: 24 }}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {}}
							style={{
								backgroundColor: activeColors.secondary,
								borderRadius: 10,
								paddingHorizontal: 30,
								paddingVertical: 10,
							}}>
							<Image
								source={require("../images/apple.png")}
								style={{ height: 24, width: 24 }}
							/>
						</TouchableOpacity>
					</View>

					<Text
						style={{
							textAlign: "center",
							color: activeColors.tint,
							marginBottom: 30,
						}}>
						Or, register with email ...
					</Text>

					<InputField
						label={"Full Name"}
						icon={
							<Ionicons
								name='person-outline'
								size={20}
								color='#666'
								style={{ marginRight: 5 }}
							/>
						}
					/>

					<InputField
						label={"Email ID"}
						icon={
							<MaterialIcons
								name='alternate-email'
								size={20}
								color='#666'
								style={{ marginRight: 5 }}
							/>
						}
						keyboardType='email-address'
					/>

					<InputField
						label={"Password"}
						icon={
							<Ionicons
								name='ios-lock-closed-outline'
								size={20}
								color='#666'
								style={{ marginRight: 5 }}
							/>
						}
						inputType='password'
					/>

					<InputField
						label={"Confirm Password"}
						icon={
							<Ionicons
								name='ios-lock-closed-outline'
								size={20}
								color='#666'
								style={{ marginRight: 5 }}
							/>
						}
						inputType='password'
					/>

					<View
						style={{
							flexDirection: "row",
							borderBottomColor: "#ccc",
							borderBottomWidth: 1,
							paddingBottom: 8,
							marginBottom: 30,
						}}>
						<Ionicons
							name='calendar-outline'
							size={20}
							color='#666'
							style={{ marginRight: 5 }}
						/>
						<TouchableOpacity onPress={() => setOpen(true)}>
							<Text style={{ color: "#666", marginLeft: 5, marginTop: 5 }}>
								{dobLabel}
							</Text>
						</TouchableOpacity>
					</View>
					<DatePicker
						modal
						open={open}
						date={date}
						mode={"date"}
						maximumDate={new Date("2015-01-01")}
						minimumDate={new Date("1980-01-01")}
						onConfirm={(date) => {
							setOpen(false);
							setDate(date);
							setDobLabel(date.toDateString());
						}}
						onCancel={() => {
							setOpen(false);
						}}
					/>

					<CustomButton label={"Register"} onPress={() => {}} />

					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							marginBottom: 30,
						}}>
						<Text style={{ color: activeColors.tint }}>
							Already registered?{" "}
						</Text>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Text style={{ color: activeColors.accent, fontWeight: "700" }}>
								{" "}
								Login
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default RegisterScreen;
