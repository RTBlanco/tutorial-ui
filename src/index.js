import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TourContext, TourProvider } from '@reactour/tour';

import 'bootstrap/dist/css/bootstrap.min.css';


const steps = [
  {
    selector: '#banner',
    content: 'this is my banner'
  },
  {
    selector: "#user-form",
    content: 'this is the user form'
  }
]

ReactDOM.render(
  // <React.StrictMode>
  <TourProvider steps={steps}>
    <App />
  </TourProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);


