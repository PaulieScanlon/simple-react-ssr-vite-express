import { hydrateRoot } from 'react-dom/client';

import Page from './page';

hydrateRoot(document.getElementById('app'), <Page />);
