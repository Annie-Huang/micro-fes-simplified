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

import createTaps from 'growlers/VanillaTaps';
import createCart from 'growlers/VanillaCart';
import createSearch from 'growlers/VanillaSearch';
import { load, subscribe } from 'growlers/store';

load('hv-taplist');