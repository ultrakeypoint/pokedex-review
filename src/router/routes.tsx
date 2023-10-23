import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import PATH from '@/constants/path';
import Detail from '@/pages/Detail';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PATH.ROOT,
        element: <Home />,
      },
      {
        path: `${PATH.DETAIL}/:id`,
        element: <Detail />,
      },
    ],
  },
]);

export default routes;
