import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import Cart from './components/Cart';

const App = () => (
  <ChakraProvider>
    <Cart />
  </ChakraProvider>
);

/*
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
*/

export default (selector: string) => {
  const rootElement = document.querySelector(selector);
  if (!rootElement) throw new Error('Failed to find the root element');

  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  root.render(<App />);
};
