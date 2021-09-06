import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IssueListScreen from '../screens/IssueListScreen';
import IssueDetailsScreen from '../screens/IssueDetailsScreen';
import FiltersScreen from '../screens/FiltersScreen';

const IssuesNavigator = createStackNavigator({
  IssueListScreen: {screen: IssueListScreen},
  IssueDetailsScreen: {screen: IssueDetailsScreen},
  FiltersScreen: {screen: FiltersScreen},
});

export default createAppContainer(IssuesNavigator);
