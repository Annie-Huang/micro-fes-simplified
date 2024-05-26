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

const filter = () => {
  const searchRE = new RegExp(store.searchText, 'i');
  return store.taps
    .filter(
      ({ beverageName, abv }) =>
        beverageName.match(searchRE) && abv <= store.alcoholLimit
    )
    .slice(0, 15);
};

export const load = (client: string): void => {
  fetch(`http://localhost:8080/${client}.json`)
    .then((resp) => resp.json())
    .then((taps: Beverage[]) => {
      store.taps = taps;
      store.filteredTaps = filter();
    });
};

export default store;
