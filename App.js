import React, { useState } from "react";
import './App.css';
import WeatherApp from './weatherapp';
import { Login } from './login';
import { Register } from './registration';
import Countdown from "./countdownapp";


// function App() {
  // return (
  //   <div>
  //     <WeatherApp/>      
  //   </div>
    
  // );
 
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  // return (
  //   <div className="App">
  //     {
  //       currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  //     }
  //   </div>
  // );

// }



// Countdown
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countdown />
      </header>
    </div>
  );
}

export default App;


// export default App;
