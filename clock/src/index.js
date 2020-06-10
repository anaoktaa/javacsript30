import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AnalogClockContainer from './components/analog-clock-container/analog-clock-container.component';

ReactDOM.render(
  <React.StrictMode>
    <AnalogClockContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

