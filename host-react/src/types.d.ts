export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

export interface TapStore {
  taps: Beverage[];
  searchText: string;
  alcoholLimit: number;
  filteredTaps: Beverage[];
  cart: Beverage[];
}
