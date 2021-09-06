import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Card from '../components/Card';
import {useFetch} from '../units/hooks';
import {BASEURL, REPONAME} from '../constants/api';

const IssueDetailsScreen = props => {
  const {navigation} = props;
  const issueNumber = navigation.getParam('issueNumber');
  const {isLoading, data: issue} = useFetch(
    `${BASEURL}/repos/${REPONAME}/issues/${issueNumber}`,
  );

  React.useEffect(() => {
    navigation.setParams({title: issue.id});
  }, [issue]);

  return (
    <ScrollView style={styles.screen}>
      <Spinner visible={isLoading} />
      <Card {...props} issue={issue} />
    </ScrollView>
  );
};

IssueDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Issue# ' + (navData.navigation.getParam('title') || ''),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default IssueDetailsScreen;
