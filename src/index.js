import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from './components/Authentication/auth0-provider-with-navigate';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
<Auth0ProviderWithNavigate>
    <App />
  </Auth0ProviderWithNavigate>
  </BrowserRouter>
);