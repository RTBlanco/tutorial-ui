import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TourProvider } from '@reactour/tour';
import { steps } from './steps';

import 'bootstrap/dist/css/bootstrap.min.css';


const styles = {
  popover: base => ({
    ...base,
    '--reactour-accent': '#0d6efd',
    borderRadius: 10,
    // height: 10
  }),
  maskArea: base => ({ ...base, rx: 10 }),
  maskWrapper: base => ({ ...base, color: '#000000' }),
  badge: base => ({ ...base, left: 'auto', right: '-0.8125em' }),
  controls: base => ({ ...base, marginTop: 10 }),
  close: base => ({ ...base, right: 'auto', left: 8, top: 8 }),
}

// padding={{ mask: 0, popover: [10, 10]}}

ReactDOM.render(
  // <React.StrictMode>
  <TourProvider steps={steps}  styles={styles}>
    <App />
  </TourProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);


