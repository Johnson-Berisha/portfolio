import React from 'react'

// components/LoadingScreen.js
const LoadingScreen = () => {
  return (
    <div style={{position: 'fixed', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
