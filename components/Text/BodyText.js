import React from 'react';
import { Text, StyleSheet } from 'react-native';

import defaultStyles from '../../constants/default-styles';

const BodyText = props => <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>;

const styles = StyleSheet.create({
  body: defaultStyles.bodyText,
});

export default BodyText;
