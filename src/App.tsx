import React from 'react';

const App = () => {
  const unusedVariable = 'I am not used. Delete me in the return to test lint';
  return <div className="App">Hello World {unusedVariable} </div>;
};

export default App;
