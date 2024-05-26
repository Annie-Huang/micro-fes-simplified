import { proxy } from 'valtio';
import { Beverage } from './types';

export interface TapStore {
  taps: Beverage[];
  searchText: string;
  alcoholLimit: number;
  filteredTaps: Beverage[];
  cart: Beverage[];
}

const store = proxy<TapStore>({
  taps: [],
  searchText: '',
  alcoholLimit: 5,
  filteredTaps: [],
  cart: [],
});

export default store;
