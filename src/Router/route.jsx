import { createBrowserRouter } from 'react-router-dom';
import Main from './../Layout/Main';
import Dashboard from '../Components/Dashboard/Dashboard';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Dashboard/>,
        },
        {
          path: "/analisis",
          element: <Dashboard/>,
        },
        {
          path: "/overview",
          element: <Dashboard/>,
        },
        {
          path: "/profile",
          element: <Dashboard/>,
        },
        {
          path: "/search",
          element: <Dashboard/>,
        },
      ],
    },
  ]);