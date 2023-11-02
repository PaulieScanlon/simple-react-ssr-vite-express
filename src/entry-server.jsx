import { renderToString } from 'react-dom/server';

import App from './app';

export const render = (data) => {
  return renderToString(<App data={data} />);
};
