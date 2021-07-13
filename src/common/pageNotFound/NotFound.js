import React from 'react';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'aliceblue',
    alignSelf: 'center',
    width: '80%',
    marginLeft: '10%',
    marginTop: '10%',
  },
};

const NotFound = () => (
	<div style={styles.container}>
		<h1 style={{ fontSize: 70, color: 'grey' }}>Page Not Found</h1>
	</div>
);

export default NotFound;
