import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SeachBar = () => {
	return (
		<View style={styles.background}>
			<Feather style={styles.iconStyle} name='search' />
			<TextInput style={styles.inputStyle} placeholder='Search' />
		</View>
	);
};
const styles = StyleSheet.create({
	background: {
		backgroundColor: 'lightgrey',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginTop: 10,
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});
export default SeachBar;
