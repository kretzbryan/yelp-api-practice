import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
export default () => {
	const [results, setResults] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		searchApi('magnolia');
	}, []);

	const searchApi = async (searchTerm) => {
		console.log('searched!');
		try {
			const res = await yelp.get('/search', {
				params: {
					term: searchTerm,
					location: 'san francisco',
					limit: 50,
				},
			});
			setResults(res.data.businesses);
		} catch (err) {
			setErrorMsg('Something went wrong');
		}
	};

	return [searchApi, results, errorMsg];
};
