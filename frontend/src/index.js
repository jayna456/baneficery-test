import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'

import Register from './Register';
import Baneficry from './bank/Baneficry';
import AddBaneficry from './bank/AddBaneficry';
import EditBaneficry from './bank/EditBaneficry';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Register />
    ),
  },
  {
    path: "/baneficry",
    element: (
      <Baneficry />
    ),
  },
  {
    path: "/add",
    element: (
      <AddBaneficry />
    ),
  },
  {
    path: "/add",
    element: (
      <AddBaneficry />
    ),
  },
  {
    path: "edit",
    element: <EditBaneficry />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
