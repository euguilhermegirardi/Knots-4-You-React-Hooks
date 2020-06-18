import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000}/>
      </Router>
    </Provider>
  );
}

export default App;
