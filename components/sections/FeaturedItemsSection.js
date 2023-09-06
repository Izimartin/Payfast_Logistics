import { Image, Text, View } from "react-native";
import React, { useContext } from "react";

import FeaturedCardComponent from "../cards/FeaturedCardComponent";
import { ThemeContext } from "../../context/ThemeContext";
import { colors } from "../../config/theme";

const images = [
	require("../../images/sample_image_1.jpg"),
	require("../../images/sample_image_2.jpg"),
	require("../../images/sample_image_3.jpg"),
	require("../../images/sample_image_4.jpg"),
];

const getRatingStars = (rating) => {
	const filledStars = Math.floor(rating); // Number of filled stars
	const isHalfStar = rating % 1 !== 0; // Check if there is a half star
	const emptyStars = 5 - filledStars - (isHalfStar ? 1 : 0); // Number of empty stars

	const stars = [];

	// Add filled stars
	for (let i = 0; i < filledStars; i++) {
		stars.push("★"); // Unicode star symbol
	}

	// Add half star if applicable
	if (isHalfStar) {
		stars.push(""); // Unicode half-star symbol
	}

	// Add empty stars
	for (let i = 0; i < emptyStars; i++) {
		stars.push("☆"); // Unicode empty star symbol
	}

	return stars.join(" "); // Join the symbols with a space
};

const FeaturedItemsSection = () => {
	const { theme } = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
		<View>
			<Text
				style={{
					fontSize: 24,
					fontWeight: "bold",
					paddingHorizontal: 10,
					marginTop: 20,
					marginBottom: 15,
					color: activeColors.text,
				}}>
				Featured Items
			</Text>
			<View style={{ flexDirection: "column", paddingHorizontal: 10 }}>
				{[...Array(2)].map((_, rowIndex) => (
					<View
						key={rowIndex}
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						{[...Array(2)].map((_, colIndex) => (
							<FeaturedCardComponent
								key={colIndex}
								imageSource={images[rowIndex * 2 + colIndex]}
								title={`Truck ${rowIndex * 2 + colIndex + 1}`}
								description={`Price: $${
									(rowIndex * 2 + colIndex + 1) * 100
								}.00\nRating: ${getRatingStars(4.0 + Math.random() * 1.0)}`}
							/>
						))}
					</View>
				))}
			</View>
		</View>
	);
};

export default FeaturedItemsSection;
