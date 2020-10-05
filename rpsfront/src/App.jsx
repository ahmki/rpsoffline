import React, { useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3001';

function App() {
  useEffect(() => {
    axios.get(`${baseUrl}/ping`);
  });

  return (
    <div>palli</div>
  );
}

export default App;
