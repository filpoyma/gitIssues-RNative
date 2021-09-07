import React from 'react';
import { View, Text, StyleSheet, Switch, Platform, ScrollView, SafeAreaView } from 'react-native';

import Context from '../context';
import Colors from '../constants/colors';
import CustomButton from '../components/Buttons/CustomButton';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.text}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.accent, false: Colors.primary }}
        thumbColor={Platform.OS === 'android' ? Colors.accent : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const { labels, filters, setFilterHandler } = React.useContext(Context);

  const [localFilters, setLocalFilter] = React.useState(filters);

  const applyFilterHandler = () => {
    setFilterHandler(localFilters);
    navigation.navigate({ routeName: 'IssueListScreen' });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scroll}>
          {labels.map(label => (
            <FilterSwitch
              key={label}
              label={label}
              state={localFilters[label]}
              onChange={newValue => setLocalFilter(state => ({ ...state, [label]: newValue }))}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton style={styles.button} onPress={applyFilterHandler}>
          Apply Filter
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filters',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  button: {
    width: '100%',
    height: 50,
  },
});

export default FiltersScreen;
