import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';

const styles = {
  container: {
    flexDirection: 'column',
    width: '60%',
    marginLeft: '20%',
    height: 'auto',
    alignSelf: 'center',
    display: 'block',
    borderBottom: '1px solid lightgrey',
    marginTop: '2%',
  },
  topSection: {
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    display: 'flex',
    // border: '1px solid',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '.5rem',
  },
  viewButtonContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  userIdentifierSection: {
    display: 'block',
  },
  countrySection: {
    display: 'block',
    paddingLeft: '3%',
  },
  name: {
    marginLeft: '2%',
    fontSize: 'medium',
    fontWeight: 'normal',
    color: 'black',
  },
  nickName: {
    marginLeft: '2%',
    fontSize: 'medium',
    fontWeight: 'bold',
    color: 'grey',
  },
  showMore: {
    marginRight: '2%',
    textTransform: 'Capitalize',
  },
  userBio: {
    paddingLeft: '5%',
    paddingRight: '2%',
    fontSize: 'small',
    fontWeight: '500',
    color: 'black',
  },
};

function SearchResultTile({
  name, nickName, avatar, biography, location, email, githubUrl,
}) {
  return (
        <div style={styles.container}>
            <section style={styles.topSection}>
                <div style={styles.itemContainer}>
                  <div style={styles.userIdentifierSection} />
                    <img
                      src={avatar}
                      alt="avatar"
                      width="30px"
                      height="30px"
                      style={{ borderRadius: '50%' }}
                    />
                    <br />
                    <span style={styles.name}>{name}</span>
                    <span style={styles.nickName}>{nickName}</span>
                </div>
                <div style={styles.viewButtonContainer}>
                <Button
                  variant="outlined"
                  style={styles.showMore}
                  endIcon={<GitHubIcon />}
                >
                  <a href={githubUrl} target="blank" style={{ textDecoration: 'none', color: 'black' }}>more</a>
                </Button>
                </div>
            </section>
            <section style={styles.topSection}>
                <div style={styles.itemContainer}>
                  <span style={styles.userBio}>{biography}</span>
                </div>
            </section>
            <section style={styles.topSection}>
              <div style={styles.itemContainer}>
                <div style={styles.countrySection} />
                  <span style={styles.name}>{location}</span>
                  <span style={styles.name}>{email}</span>
              </div>
            </section>
        </div>
  );
}

export default SearchResultTile;
