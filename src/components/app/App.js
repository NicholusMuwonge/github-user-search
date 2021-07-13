import React from 'react';
import { useSelector } from 'react-redux';
import SortMenu from '../dropDownMenu/SortButton';
import './App.css';
import SearchResultTileContainer from '../searchTile/SearchTileContainer';
import PaginationOutlined from '../../common/pagination/Pagination';
import SearchBanner from './NoticeBanner';
import Loader from '../../common/loader/Loader';

const styles = {
  container: {
    padding: '1rem',
    backgroundColor: '#fafbfc',
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
    flexDirection: 'column',
    display: 'flex',
  },
  resultsCount: {
    fontSize: 'x-large',
    fontWeight: 'bolder',
  },
};
function AppComponent() {
  const searchResults = useSelector((centralState) => centralState.searchUsersReducer);
  const loading = useSelector((state) => state.LoaderReducer.loading);
  return (
    <div className="App" style={styles.container}>
      {/* This is the GitHub Search */}
      <section style={styles.sortBar}>
        <div style={styles.sortBarSubContainer}>
          <span style={styles.resultsCount}>
            {searchResults.currentQuery && searchResults.count ? `${searchResults.count} results found.` : null}
          </span>
        </div>
        <span style={styles.sortBarSubContainer}>
          {searchResults.currentQuery && searchResults.count > 0 && <SortMenu />}
        </span>
      </section>
      {
        loading ? <Loader />
          : (
<>
          {searchResults.currentQuery ? <SearchResultTileContainer /> : <SearchBanner />}
          {searchResults.currentQuery && searchResults.count < 1 && <SearchBanner text={`We couldn’t find any users matching ${searchResults.currentQuery}`} />}
          <PaginationOutlined
            query={searchResults?.currentQuery}
            count={searchResults?.count}
          />
</>
          )
      }
    </div>
  );
}

export default AppComponent;
