import Layout from 'components/Layout';
import HomePage from 'pages/Home';
import TodoPage from 'pages/Todo';
import { createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage food='eat' />,
      },
      {
        path: '/todo/post/:id',
        element: <TodoPage />,
      },
      // {
      //   path: '/todo/:Maye/:gucci',
      //   element: <TodoPage />,
      // },
      // {
      //   path: '/todo/404/010',
      //   element: <HomePage />,
      // },
    ],
  },
]);

export default router;
