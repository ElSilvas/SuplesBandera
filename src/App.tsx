import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFlag, setSelectedFlag] = useState<string>(''); 

  const handleFlagChange = (flag: string) => {
    setSelectedFlag(flag);
  };

  const renderFlag = () => {
    switch (selectedFlag) {
      case 'Ecuador':
        return (
          <div className="flag">
            <div className="stripe" style={{ backgroundColor: 'yellow' }}></div>
            <div className="stripe" style={{ backgroundColor: 'blue' }}></div>
            <div className="stripe" style={{ backgroundColor: 'red' }}></div>
          </div>
        );
      case 'Argentina':
        return (
          <div className="flag">
            <div className="stripe" style={{ backgroundColor: 'lightblue' }}></div>
            <div className="stripe" style={{ backgroundColor: 'white' }}></div>
            <div className="stripe" style={{ backgroundColor: 'lightblue' }}></div>
          </div>
        );
      case 'Bolivia':
        return (
          <div className="flag">
            <div className="stripe" style={{ backgroundColor: 'red' }}></div>
            <div className="stripe" style={{ backgroundColor: 'yellow' }}></div>
            <div className="stripe" style={{ backgroundColor: 'green' }}></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="flag-container">{renderFlag()}</div>
        <div className="button-container">
          <button onClick={() => handleFlagChange('Ecuador')}>Ecuador</button>
          <button onClick={() => handleFlagChange('Argentina')}>Argentina</button>
          <button onClick={() => handleFlagChange('Bolivia')}>Bolivia</button>
        </div>
      </div>
    </div>
  );
}

export default App;
