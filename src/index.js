import React from 'react';
import ReactDOM from 'react-dom/client';
import { Buffer } from 'buffer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import getLibrary from './utils/getLibrary';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

window.Buffer = window.Buffer || Buffer;

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
         <App />
      </Web3ProviderNetwork>
    </Web3ReactProvider>
    <NotificationContainer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
