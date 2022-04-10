import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRoutes from './routes/AppRoutes';

// import Auth from "./pages/home/auth/Auth";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <AuthSpotify /> */}
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
