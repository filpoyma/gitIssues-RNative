import React from 'react';
import { StyleSheet, View } from 'react-native';
import TitleText from '../Text/TitleText';
import IssueButton from '../Buttons/IssueButton';
import BodyText from '../Text/BodyText';

const DetailsCard = props => {
  const { issue = {}, cut = false, style } = props;
  return (
    <View style={{ ...styles.card, ...style }}>
      <View style={styles.titleContainer}>
        <TitleText style={styles.title}>{cut ? issue.title?.slice(0, 33) + '...' : issue?.title}</TitleText>
      </View>
      <View style={styles.buttonsContainer}>
        {issue.labels?.map(label => (
          <IssueButton key={label.id}>{label.name}</IssueButton>
        ))}
      </View>
      {!cut && (
        <View style={styles.textContainer}>
          <BodyText>{issue.body}</BodyText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 20,
    paddingBottom: 7,
    paddingHorizontal: 20,
  },
  titleContainer: {
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    paddingTop: 30,
  },
});

export default DetailsCard;
