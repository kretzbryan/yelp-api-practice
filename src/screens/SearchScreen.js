import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SeachBar from '../components/SeachBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMsg] = useResults();

	return (
		<View>
			<Text>Search Screen</Text>
			<SeachBar
				term={term}
				onChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMsg ? <Text>{errorMsg}</Text> : null}
			<Text>We have found {results.length} results</Text>
		</View>
	);
};

const styles = StyleSheet.create({});
export default SearchScreen;
