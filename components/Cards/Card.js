import React from 'react';
import { TouchableOpacity } from 'react-native';

import DetailsCard from './DetailsCard';

const Card = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        props.navigation.navigate({
          routeName: 'IssueDetailsScreen',
          params: { issueNumber: props.issue.number },
        })
      }
    >
      <DetailsCard {...props} />
    </TouchableOpacity>
  );
};

export default Card;
