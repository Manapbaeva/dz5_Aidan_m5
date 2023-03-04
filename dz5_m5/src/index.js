import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import userReducer from "./redux/reducer/Reducer";


const rootReducer = combineReducers({
    user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));


const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Root;
