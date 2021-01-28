import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SeachBar from '../components/SeachBar';
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
		<View style={{ flex: 1 }}>
			<SeachBar
				term={term}
				onChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMsg ? <Text>{errorMsg}</Text> : null}
			<ScrollView>
				<ResultsList results={filterByPrice('$')} title='Cost Effective' />
				<ResultsList results={filterByPrice('$$')} title='Bit Pricier' />
				<ResultsList results={filterByPrice('$$$')} title='Big Spender' />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({});
export default SearchScreen;
