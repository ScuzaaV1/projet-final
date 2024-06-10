import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'; // Adjust path if needed
import store from './redux/store'; // Adjust path if needed
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// Start measuring performance in your app, pass a function to log results
reportWebVitals(console.log);