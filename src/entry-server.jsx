import { renderToString } from 'react-dom/server';

import App from './app';

export const render = () => {
  return renderToString(<App />);
};
