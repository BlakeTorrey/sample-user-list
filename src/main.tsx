import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.tsx';


const rootElement = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

rootElement.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
