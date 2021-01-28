import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SeachBar from '../components/SeachBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);

	const searchApi = async () => {
		const res = await yelp.get('/search', {
			params: {
				term,
				location: 'san francisco',
				limit: 50,
			},
		});
		setResults(res.data.businesses);
	};

	return (
		<View>
			<Text>Search Screen</Text>
			<SeachBar
				term={term}
				onChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={searchApi}
			/>
			<Text>We have found {results.length} results</Text>
		</View>
	);
};

const styles = StyleSheet.create({});
export default SearchScreen;
