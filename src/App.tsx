import React from 'react';
import './App.css';
import Accordeon from './Accordeon'
import SwitcherBlock from './SwitcherBlock';

function App() {
  return (
    <div className="App">
      
      <Accordeon titleValue={"Menu"} collapsed={true}/>
      <Accordeon titleValue={"Users"} collapsed={false}/>
      <SwitcherBlock switcher={true}/>
    </div>
  );
}

export default App;
