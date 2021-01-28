import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		Show: ResultsShowScreen,
	},
	{
		initialROuteName: 'Search',
		defaultNavigationOptions: {
			title: 'Business Search',
		},
	}
);

export default createAppContainer(navigator);
