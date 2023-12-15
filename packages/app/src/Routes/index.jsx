import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from '../components';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: <div>test page!</div>,
  },
];

const router = createBrowserRouter(routes);

const Routes = () => <RouterProvider router={router} />;
export default Routes;
