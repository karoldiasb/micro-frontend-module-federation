import React, { Suspense } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { Loading } from '../components';

const HomePage = React.lazy(() => import('HomeApp/HomePage'));
const ContactPage = React.lazy(() => import('ContactApp/ContactPage'));

const routes = [
  {
    path: '*',
    element: <Home />,
  },
  {
    path: '/home',
    element: (
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/contact',
    element: (
      <Suspense fallback={<Loading />}>
        <ContactPage />
      </Suspense>
    ),
  },
];

const router = createBrowserRouter(routes);

const Routes = () => <RouterProvider router={router} />;
export default Routes;
