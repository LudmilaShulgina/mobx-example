import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'mobx-react';
import BooksStore from "./stores/BooksStore";

const stores = {
    bookStore: new BooksStore()
}

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
  document.getElementById('root')
);

