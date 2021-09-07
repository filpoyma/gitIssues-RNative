import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import IssueButton from './Buttons/IssueButton';

const FilterSelector = ({ navigation, selectedFilters }) => {
  const labels = Object.entries(selectedFilters)
    .map(el => el[1] && el[0])
    .filter(el => el);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={() => navigation.navigate({ routeName: 'FiltersScreen' })}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/tag.png')} />
      </View>
      <View style={styles.labelsContainer}>
        {labels.map(label => (
          <IssueButton key={label}>{label}</IssueButton>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  imageContainer: {
    width: 50,
    height: 49,

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
  labelsContainer: {
    borderLeftColor: colors.accent,
    borderLeftWidth: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
});
export default FilterSelector;
