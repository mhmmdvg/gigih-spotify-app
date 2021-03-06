import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reduce/store';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App"> */}

      <AppRoutes />

      {/* </div> */}
    </Provider>
  );
}

export default App;
