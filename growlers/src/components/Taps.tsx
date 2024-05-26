import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSnapshot } from 'valtio';

import BeverageCard from './BeverageCard';
import store from '../store';
import { MFE_BORDER } from '../constants';

const Taps = () => {
  const { filteredTaps } = useSnapshot(store);

  console.log('filteredTaps=', filteredTaps);

  return (
    <Box border={MFE_BORDER}>
      {filteredTaps.map((beverage) => (
        <BeverageCard
          key={[beverage.producerName, beverage.beverageName].join('')}
          beverage={beverage}
        />
      ))}
    </Box>
  );
};

export default Taps;
