import { renderToString } from 'react-dom/server';

import Page from './page';

export const render = () => {
  return renderToString(<Page />);
};
