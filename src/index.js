import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/app";
import ErrorBoundry from './components/error-boundry/error-boundry';
import ShimanoService from "./service/shimano-service";
import { ShimanoServiceProvider } from "./components/shimano-service-context/shimano-service-context";
import store from "./store";



const shimanoService = new ShimanoService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ShimanoServiceProvider value={shimanoService}>
                <Router>
                    <App />
                </Router>
            </ShimanoServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
