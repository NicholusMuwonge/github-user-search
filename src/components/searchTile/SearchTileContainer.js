import React from 'react';
import { useSelector } from 'react-redux';
import SearchResultTile from './SearchResultTile';

function SearchResultTileContainer() {
  const getUserData = useSelector((centralState) => centralState.searchUsersReducer);
  return (
      <span>
        {getUserData.data.map((user) => (
          <SearchResultTile
            key={`${user.login}`}
            name={user?.name}
            nickName={user?.login}
            avatar={user?.avatar_url}
            biography={user?.bio}
            location={user?.location}
            email={user?.email}
            githubUrl={user?.html_url}
          />
        ))}
      </span>
  );
}

export default SearchResultTileContainer;
