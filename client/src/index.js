import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./scss/global.scss";
import App from './App';
import { store } from "./redux/store";
import { Provider } from "react-redux";

if('serviceWorker' in navigator) {
    send().catch(err => console.log(err));
}

async function send() {
    console.log('Registering serviceWorker...');
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });
    console.log('Registered serviceWorker...');

}


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
