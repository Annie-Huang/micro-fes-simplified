import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';

import Taps from 'growlers/Taps';
import { load } from 'growlers/store';
load('hv-taplist');

// react micro frontend app with module federation, share assets
// https://www.linkedin.com/pulse/sharing-images-module-federation-rany-elhousieny-phd%E1%B4%AC%E1%B4%AE%E1%B4%B0/

const App = () => (
  <ChakraProvider>
    <Taps />
  </ChakraProvider>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
