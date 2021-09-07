import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import DetailsCard from '../components/DetailsCard';
import { useFetch } from '../units/hooks';
import { BASEURL, REPONAME } from '../constants/api';

const IssueDetailsScreen = props => {
  const { navigation } = props;
  const issueNumber = navigation.getParam('issueNumber');
  const { isLoading, data: issue } = useFetch(`${BASEURL}/repos/${REPONAME}/issues/${issueNumber}`);

  React.useEffect(() => {
    navigation.setParams({ title: issue.id });
  }, [issue]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spinner visible={isLoading} />
        <DetailsCard {...props} issue={issue} />
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: 'white',
  },
});

export default IssueDetailsScreen;
