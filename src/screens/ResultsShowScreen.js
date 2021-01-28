import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { useState } from 'react/cjs/react.development';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
	const [showPhotos, setShowPhotos] = useState([]);
	const id = navigation.getParam('id');
	console.log(showPhotos);
	useEffect(() => {
		getBusinessPhotos(id);
	}, []);

	const getBusinessPhotos = async (id) => {
		try {
			const res = await yelp.get(`/${id}`);
			setShowPhotos(res.data.photos);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<View>
			<FlatList
				data={showPhotos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => (
					<Image style={{ height: 175, width: 225 }} source={{ uri: item }} />
				)}
			/>
		</View>
	);
};
const styles = StyleSheet.create({});
export default ResultsShowScreen;
