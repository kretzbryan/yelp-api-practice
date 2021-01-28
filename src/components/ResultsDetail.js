import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
	return (
		<View>
			<Image style={styles.imageStyle} source={{ uri: result.image_url }} />
			<Text style={styles.nameStyle}>{result.name}</Text>
			<Text style={styles.nameStyle}>
				{result.rating} stars, {result.review_count} reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	imageStyle: {
		height: 150,
		width: 250,
		marginLeft: 15,
		borderRadius: 2,
		marginBottom: 5,
	},
	nameStyle: {
		fontWeight: 'bold',
		marginLeft: 15,
	},
});
export default ResultsDetail;
