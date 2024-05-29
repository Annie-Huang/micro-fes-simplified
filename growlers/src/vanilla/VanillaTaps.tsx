import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import Taps from '../components/Taps';

const App = () => (
  <ChakraProvider>
    <Taps />
  </ChakraProvider>
);

/*
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
*/

export default (selector: string): void => {
  const rootElement = document.querySelector(selector);
  if (!rootElement) throw new Error('Failed to find the root element');

  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  root.render(<App />);
};
