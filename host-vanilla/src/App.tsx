/*import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const App = () => (
  <div className="container">
    <div>Name: host-vanilla</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)*/

import './index.css';

import { load, subscribe } from 'growlers/store';
import VanillaTaps from 'growlers/VanillaTaps';
import VanillaCart from 'growlers/VanillaCart';
import VanillaSearch from 'growlers/VanillaSearch';

load('hv-taplist');

VanillaSearch('.search');
VanillaTaps('.taps');
VanillaCart('.cart');

subscribe((state) => {
  document.querySelector('.beverage-list').innerHTML = state.filteredTaps
    .map(({ beverageName }) => beverageName)
    .join(', ');
  console.log(state);
});
