import CardComponent from "../cards/CardComponent";
import React from "react";
import { ScrollView } from "react-native";

const CategoryContent = ({ selectedCategory }) => {
	const categoryImages = {
		All: [
			require("../../images/sample_image_1.jpg"),
			require("../../images/sample_image_2.jpg"),
		],
		"Semi Truck": [
			require("../../images/sample_image_3.jpg"),
			require("../../images/sample_image_4.jpg"),
		],
		"Cargo truck": [
			require("../../images/sample_image_1.jpg"),
			require("../../images/sample_image_2.jpg"),
		],
		"Container Truck": [
			require("../../images/sample_image_3.jpg"),
			require("../../images/sample_image_4.jpg"),
		],
		// Add more categories and their respective images arrays
	};

	const images = categoryImages[selectedCategory] || [];

	return (
		<ScrollView
			vertical
			//try horizontal instead of vertical
			showsHorizontalScrollIndicator={false}>
			{images.map((imageSource, index) => (
				<CardComponent
					key={index}
					imageSource={imageSource}
					title={`Sample Title - ${selectedCategory}`}
					description={`This is a sample description for the ${selectedCategory} card component.`}
				/>
			))}
		</ScrollView>
	);
};

export default CategoryContent;
