import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Pages/App';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/ThemeStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.StrictMode>,
);
