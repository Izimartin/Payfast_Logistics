import {
	Button,
	Image,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { Component } from "react";

import CategoryTabSection from "../components/sections/CategoryTabSection";
import Color from "../config/Color";
import FeaturedItemsSection from "../components/sections/FeaturedItemsSection";
import HorizontalDealsSection from "../components/sections/HorizontalDealsSection";
import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../config/theme";

const handlePress = () => {
	// Navigate to the ListingScreen
	navigation.navigate("ListingScreen");
};
class HomeScreens extends Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
			selectedLocation: null,
		};
	}

	componentDidMount() {
		// Fetch initial location data or use geolocation to get user's current location
		// Update the 'initialRegion' state with the fetched or current location data
	}

	onRefresh = () => {
		this.setState({ refreshing: true });
		// Fetch new data here and update your state
		// After fetching the data, set refreshing to false
		this.setState({ refreshing: false });
	};

	handleSelectLocation = () => {
		// Open a modal or navigate to a screen for location selection
		// You can use a library like 'react-native-modal' for the modal
	};

	render() {
		const { theme } = this.context;
		const activeColors = colors[theme.mode];

		const styles = StyleSheet.create({
			container: {
				flex: 1,
				backgroundColor: activeColors.primary,
			},
			mapContainer: {
				height: 400,
			},
			selectLocationButton: {
				margin: 10,
				alignSelf: "center",
			},
			sectionTitle: {
				marginVertical: 10,
				fontSize: 18,
				fontWeight: "bold",
				color: activeColors.text, // Adjust text color
				marginLeft: 16, // Add margin to the left
			},
			pickupContainer: {
				flexDirection: "row",
				alignItems: "center",
				borderBottomColor: Color.frost,
				borderBottomWidth: 0.5, // Increase border width for visibility
				paddingVertical: 10, // Add vertical padding for spacing
				paddingHorizontal: 16, // Add horizontal padding for spacing
			},
			pickupImage: {
				width: 23,
				height: 23,
				resizeMode: "contain",
			},
			pickupTextContainer: {
				marginLeft: 10, // Add margin to the left for spacing
			},
			pickupTitle: {
				fontSize: 16,
				fontWeight: "bold",
				color: activeColors.text, // Adjust text color
			},
			pickupAddress: {
				fontSize: 14,
				color: activeColors.text, // Adjust text color
			},

			destinationContainer: {
				flexWrap: "wrap",
				flexDirection: "row",
				alignItems: "center",
				borderBottomColor: Color.frost,
				borderBottomWidth: 0.5, // Increase border width for visibility
				paddingVertical: 10, // Add vertical padding for spacing
				paddingHorizontal: 16, // Add horizontal padding for spacing
			},
			destinationImage: {
				width: 23,
				height: 23,
				resizeMode: "contain",
			},
			destinationTextContainer: {
				marginLeft: 10, // Add margin to the left for spacing
			},
			destinationTitle: {
				fontSize: 16,
				fontWeight: "bold",
				color: activeColors.text,
				marginLeft: 10, // Adjust text color
			},
			destinationAddress: {
				fontSize: 14,
				color: activeColors.text,
				marginLeft: 35, // Adjust text color
				// Allow text to wrap onto the next line
			},
		});

		const initialRegion = {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		};

		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.container}
				contentContainerStyle={{ flexGrow: 1 }}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.onRefresh}
					/>
				}>
				<View style={styles.mapContainer}>
					<MapView style={{ flex: 1 }} initialRegion={initialRegion}>
						{this.state.selectedLocation && (
							<Marker
								coordinate={{
									latitude: this.state.selectedLocation.latitude,
									longitude: this.state.selectedLocation.longitude,
								}}
								title='Selected Location'
							/>
						)}
					</MapView>
				</View>
				<Button
					title='Select Location'
					onPress={this.handleSelectLocation}
					style={styles.selectLocationButton}
					color={activeColors.secondary}
				/>
				<TouchableOpacity>
					<View style={styles.pickupContainer}>
						<Image
							style={styles.pickupImage}
							source={require("../images/picupicon.png")}
						/>
						<View style={styles.pickupTextContainer}>
							<Text style={styles.pickupTitle}>Title: PICKUP</Text>
							<Text style={styles.pickupAddress}>
								Address: My current location
							</Text>
						</View>
					</View>
				</TouchableOpacity>
				<View style={styles.destinationContainer}>
					<Image
						style={styles.destinationImage}
						source={require("../images/destination-icon.png")}
					/>
					<Text style={styles.destinationTitle}>Title: DESTINATION</Text>
					<Text style={styles.destinationAddress}>
						Address: 1003, Abhishree Adroit, India
					</Text>
				</View>

				<Text style={styles.sectionTitle}>Menu</Text>
				<CategoryTabSection />

				{/* <Text style={styles.sectionTitle}>Featured Items</Text>
				<FeaturedItemsSection />

				<Text style={styles.sectionTitle}>Horizontal Deals</Text>
				<HorizontalDealsSection /> */}
			</ScrollView>
		);
	}
}

HomeScreens.contextType = ThemeContext; // To access context

export default HomeScreens;
