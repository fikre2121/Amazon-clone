import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter } from "react-router-dom";
import DataProvider  from './Components/DataProvider/DataProvider.jsx';
import {reducer,initialstate} from "./Utility/reducer.js"
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>

      <DataProvider reducer={reducer} initialstate={initialstate}>
        <App />
      </DataProvider>

    </StrictMode>
  </BrowserRouter>
);
