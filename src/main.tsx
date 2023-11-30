import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'jotai';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';
import theme from './theme/theme';

const rootElement = document.getElementById('root') as unknown as Element;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
