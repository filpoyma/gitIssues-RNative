import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import Context from '../context';
import Card from '../components/Cards/Card';
import FilterSelector from '../components/FilterSelector';
import { REPONAME } from '../constants/api';
import colors from '../constants/colors';

const IssueListScreen = props => {
  const { issues, filters } = React.useContext(Context);
  return (
    <SafeAreaView style={styles.screen}>
      <FilterSelector {...props} selectedFilters={filters} />
      <View style={styles.cardsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={issues}
          keyExtractor={item => item.id}
          renderItem={issue => <Card {...props} key={issue.item.id} issue={issue.item} cut />}
        />
      </View>
    </SafeAreaView>
  );
};

IssueListScreen.navigationOptions = {
  headerTitle: `Issues List for "${REPONAME}" repo`,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardsContainer: {
    marginTop: 10,
  },
});

export default IssueListScreen;
