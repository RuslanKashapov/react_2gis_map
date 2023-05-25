import React, { useState } from 'react';


import axios from 'axios';


import './App.css';

function App() {
  const [data, setData] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/solution/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div className="App">
        <button className="btn" onClick={handleButtonClick}>Загрузить решение</button>
        {data ? (
        <div>
          <h1>{data.numbers}</h1>
          <p>{data.description}</p>
        </div>
      ) : (
        <p>Нажмите кнопку, чтобы загрузить данные</p>
      )}
      
    </div>
  );
}

export default App;