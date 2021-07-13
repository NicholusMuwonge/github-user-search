import { Paper } from '@material-ui/core';
import React from 'react';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15%',
    // backgroundColor: '#ff9966',
  },
  textStyle: {
    color: 'grey',
    fontWeight: '300',
  },
};
const NoticeBanner = ({ text = 'Search for users on GitHub.' }) => (
        <Paper style={styles.container}>
            <h1 style={styles.textStyle}>{text}</h1>
        </Paper>
);

export default NoticeBanner;
