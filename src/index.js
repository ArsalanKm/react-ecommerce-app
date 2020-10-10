import React from "react";
import ReactDOM from 'react-dom'

import App from "./App";
import {Provider} from 'react-redux'
// import store from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'
import {persistor,store} from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App/>
        </PersistGate>
    </Provider>,
    document.querySelector("#root")
)
