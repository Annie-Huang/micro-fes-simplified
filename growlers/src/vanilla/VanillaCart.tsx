import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleGrid, Text, ChakraProvider } from '@chakra-ui/react';

// Load the store.
import { load } from './store';
load('hv-taplist');

import Search from './components/Search';
import Taps from './components/Taps';
import Cart from './components/Cart';

import './index.css';

const H3: FC<React.PropsWithChildren> = ({ children }) => (
  <Text fontSize='xl' mb={3} fontWeight='bold' textAlign='center'>
    {children}
  </Text>
);

const App = () => (
  <ChakraProvider>
    <SimpleGrid
      columns={[1, 1, 3]}
      spacing={10}
      m={[1, 1, 6]}
      templateColumns='1fr 3fr 1fr'
      gap={1}
    >
      <div>
        <H3>Search</H3>
        <Search />
      </div>
      <div>
        <H3>Taps</H3>
        <Taps />
      </div>
      <div>
        <H3>Cart</H3>
        <Cart />
      </div>
    </SimpleGrid>
  </ChakraProvider>
);

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
