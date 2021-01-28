import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SeachBar from '../components/SeachBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMsg] = useResults();

	const filterByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

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
			<ResultsList results={filterByPrice('$')} title='Cost Effective' />
			<ResultsList results={filterByPrice('$$')} title='Bit Pricier' />
			<ResultsList results={filterByPrice('$$$')} title='Big Spender' />
		</View>
	);
};

const styles = StyleSheet.create({});
export default SearchScreen;
