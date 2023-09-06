import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext } from "react";

import CustomButton from "../components/CustomButton";
import { ImageBackground } from "react-native"; // Import ImageBackground
import InputField from "../components/InputField";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../config/theme";

const LoginScreen = ({ navigation }) => {
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
				<View style={{ paddingHorizontal: 25, marginTop: 60 }}>
					<View style={{ alignItems: "center" }}></View>

					<Text
						style={{
							fontSize: 28,
							fontWeight: "500",
							color: activeColors.tint,
							marginBottom: 30,
						}}>
						Login
					</Text>

					<InputField
						selectionColor={activeColors.tint}
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
						fieldButtonLabel={"Forgot?"}
						fieldButtonFunction={() => {}}
					/>

					<CustomButton
						label={"Login"}
						onPress={() => {
							navigation.navigate("Footer");
						}}
					/>

					<Text
						style={{
							textAlign: "center",
							color: activeColors.tint,
							marginBottom: 30,
						}}>
						Or, login with ...
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

					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							marginBottom: 30,
						}}>
						<Text style={{ color: activeColors.tint }}>New to the app? </Text>
						<TouchableOpacity onPress={() => navigation.navigate("Register")}>
							<Text style={{ color: activeColors.accent, fontWeight: "700" }}>
								{" "}
								Register
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default LoginScreen;
