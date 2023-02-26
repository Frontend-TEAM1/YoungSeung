import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './adapters/router';
import ModalProvider from './store/2_context';
import UserListProvider from './store/3_context';
import { store } from './adapters/store';
import {Provider} from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <UserListProvider>
          <ModalProvider>
            <RouterProvider router={router} />
          </ModalProvider>
        </UserListProvider>
      </Provider>
    </>
  );
}

export default App;
