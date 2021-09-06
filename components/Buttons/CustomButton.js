import React from 'react';
import {TouchableOpacity} from 'react-native';
import IssueButton from './IssueButton';

const CustomButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <IssueButton style={props.style}>{props.children}</IssueButton>
    </TouchableOpacity>
  );
};

export default CustomButton;
