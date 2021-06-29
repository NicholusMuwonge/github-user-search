import React from 'react';
import SortMenu from '../dropDownMenu/SortButton';
import './App.css';
import SearchResultTile from './SearchResultTile';

const styles = {
  container: {
    padding: '1rem',
    backgroundColor: '#fafbfc',
    // flex: 1,
    // display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sortBar: {
    width: '80%',
    padding: '2%',
    marginLeft: '10%',
    flexDirection: 'row',
    display: 'flex',
    borderBottom: '1px solid lightgrey',
  },
  sortBarSubContainer: {
    flex: 1,
  },
  resultsCount: {
    fontSize: 'x-large',
    fontWeight: 'bolder',
  },
};
function AppComponent() {
  return (
    <div className="App" style={styles.container}>
      {/* This is the GitHub Search */}
      <section style={styles.sortBar}>
        <div style={styles.sortBarSubContainer}>
          <span style={styles.resultsCount}>1000/ 43,923 search results</span>
        </div>
        <span style={styles.sortBarSubContainer}>
          <SortMenu />
        </span>
      </section>
      <SearchResultTile />
    </div>
  );
}

export default AppComponent;
