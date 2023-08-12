import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/features/Container/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Container>
        <App />
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
