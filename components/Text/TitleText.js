import React from 'react';
import { Text, StyleSheet } from 'react-native';

import defaultStyles from '../../constants/default-styles';

const TitleText = props => <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>;

const styles = StyleSheet.create({
  title: defaultStyles.title,
});

export default TitleText;
