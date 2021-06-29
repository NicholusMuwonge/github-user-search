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

function SearchResultTile() {
  return (
        <div style={styles.container}>
            <section style={styles.topSection}>
                <div style={styles.itemContainer}>
                  <div style={styles.userIdentifierSection} />
                    <img
                      src="https://avatars.githubusercontent.com/u/37922214?v=4"
                      alt="avatar"
                      width="30px"
                      height="30px"
                      style={{ borderRadius: '50%' }}
                    />
                    <br />
                    <span style={styles.name}>firstName Hiace</span>
                    {/* <span style={styles.name}>lastName</span> */}
                    <span style={styles.nickName}>NickName</span>
                </div>
                <div style={styles.viewButtonContainer}>
                <Button
                  variant="outlined"
                  color="disabled"
                  style={styles.showMore}
                  endIcon={<GitHubIcon />}
                >
                  View On
                </Button>
                </div>
            </section>
            <section style={styles.topSection}>
                <div style={styles.itemContainer}>
                  <span style={styles.userBio}>This is the reader&lsquo;s Biography.</span>
                </div>
            </section>
            <section style={styles.topSection}>
              <div style={styles.itemContainer}>
                <div style={styles.countrySection} />
                  <span style={styles.name}>Location</span>
                  <span style={styles.name}>email</span>
              </div>
            </section>
        </div>
  );
}

export default SearchResultTile;
