import {
	Dimensions,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useContext, useRef, useState } from "react";

import CategoryCard from "../cards/CategoryTabCard";
import { ThemeContext } from "../../context/ThemeContext";
import { colors } from "../../config/theme";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

// Import Dimensions

const CategoryTabSection = () => {
	const { theme } = useContext(ThemeContext);
	const activeColors = colors[theme.mode];
	const categoriesScrollViewRef = useRef(null);
	const [selectedCategory, setSelectedCategory] = useState("Category 1");
	const navigation = useNavigation(); // Initialize useNavigation

	const handleCategoryPress = (category, index) => {
		setSelectedCategory(category);

		// Scroll the category to the center
		const screenWidth = Dimensions.get("window").width;
		const categoryWidth = 150; // Adjust this value based on your CategoryCard width
		const scrollToX = index * categoryWidth - (screenWidth - categoryWidth) / 2;

		categoriesScrollViewRef.current.scrollTo({
			x: scrollToX,
			animated: true,
		});

		// Navigate to the corresponding screen based on the selected category
		if (category === "All") {
			navigation.navigate("ListingScreen"); // Replace with your screen name
		} else if (category === "Semi Truck") {
			navigation.navigate("SemiTruckScreen"); // Replace with your screen name
		} else if (category === "Cargo Truck") {
			navigation.navigate("CargoTruckScreen"); // Replace with your screen name
		} else if (category === "Container Truck") {
			navigation.navigate("ContainerTruckScreen"); // Replace with your screen name
		}
	};

	return (
		<View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				ref={categoriesScrollViewRef}>
				{["All", "Semi Truck", "Cargo Truck", "Container Truck"].map(
					(category, index) => (
						<CategoryCard
							key={index}
							title={category}
							onPress={() => handleCategoryPress(category, index)}
							isActive={category === selectedCategory}
						/>
					)
				)}
			</ScrollView>
		</View>
	);
};

export default CategoryTabSection;
