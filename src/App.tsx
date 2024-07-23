import React from 'react';

const App = () => {
  const unusedVariable = 'I am not used. Delete me in the return to test lint';
  const test = 'testing ci';
  return (
    <div className="App">
      Hello World {unusedVariable} {test}{' '}
    </div>
  );
};

export default App;
