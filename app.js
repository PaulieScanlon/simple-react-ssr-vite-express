import React from 'react';
import ReactDOM from 'react-dom';

import Page from './page';

ReactDOM.hydrate(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('app')
);
