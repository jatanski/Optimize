import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./scss/global.scss";
import App from './App';
import { store } from "./redux/store";
import { Provider } from "react-redux";

const publicKey = "BJ56SiiWKsOytzDkAMsw3DwuoUBV3KLTAkeQr6uWLKmYqmqjmHkj5z8u3jiFImoDv5c3Nk869AfgWwdgmV1TrOY";

if('serviceWorker' in navigator) {
    send().catch(err => console.log(err));
}

async function send() {
    console.log('Registering serviceWorker...');
    const register = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        headers: {'Content-Type': 'application/json'}
    });
    console.log('Registered serviceWorker...');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey)
    });

    await fetch('http://localhost:8000/api/subscribe', {
       method: 'POST',
       body: JSON.stringify(subscription),
       headers: {'Content-Type': 'application/json'}
    });
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
