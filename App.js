import React, {useState} from 'react';

import Spinner from 'react-native-loading-spinner-overlay';

import IssuesNavigator from './navigation/IssuesNavigator';
import Context from './context';
import {useFetch} from './units/hooks';
import {BASEURL, REPONAME} from './constants/api';

export default function App() {
  const [filters, setFilter] = React.useState({});

  const query = Object.entries(filters)
    .map(el => el[1] && el[0])
    .filter(el => el)
    .join('&');

  let {
    isLoading,
    data: issues,
    setData: setIssuesData,
  } = useFetch(
    `${BASEURL}/repos/${REPONAME}/issues?labels=${query}&per_page=50`,
  );
  issues = issues.map(issue => ({
    id: issue.id.toString(),
    number: issue.number,
    title: issue.title,
    labels: issue.labels,
  }));

  let {_, data: labels} = useFetch(
    `${BASEURL}/repos/${REPONAME}/labels?per_page=100`,
  );
  labels = labels.map(label => label.name);

  const setFilterHandler = data => {
    setFilter(data);
  };

  return (
    <Context.Provider
      value={{labels, issues, filters, setFilterHandler, setIssuesData}}>
      <Spinner visible={isLoading} />
      <IssuesNavigator />
    </Context.Provider>
  );
}
