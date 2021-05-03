import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';


ReactDOM.render(
    <StoreProvider store={store}> 
        <App />
    </StoreProvider>
    , document.getElementById('root'));

serviceWorker.unregister();
