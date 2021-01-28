import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SeachBar = ({ term, onChange, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<Feather style={styles.iconStyle} name='search' />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder='Search'
				value={term}
				onChangeText={onChange}
				onEndEditing={onTermSubmit}
			/>
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
		marginVertical: 10,
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
