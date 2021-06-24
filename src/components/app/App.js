import React from 'react';
import './App.css';

const styles = {
  container: {
    padding: '1rem',
    backgroundColor: '#fafbfc',
    flex: 1,
    display: 'flex',
  },
};
function App() {
  return (
    <div className="App" style={styles.container}>
      This is the GitHub Search
    </div>
  );
}

export default App;
