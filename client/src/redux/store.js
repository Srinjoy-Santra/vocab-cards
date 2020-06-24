import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

import * as reducers from "./index";

export const INITIAL_STATE = {
    section: {
        current: "All",
    },
    page: {
        current: 0,
        startIndex: 0,
        endIndex: 99,
        itemsPerPage: 20
    },
    learn: {
        current: {},
        all: []
    },
    auth: {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        isLoading: false,
        user: null,
        openModal: false
    },
    alert: {
        msg: null,
        status: null,
        id: null,
        severity: null 
    }
}

export default function configureStore(initialState  = INITIAL_STATE) {
    const rootReducer = combineReducers(reducers);
    const store =  createStore(
        rootReducer,
        initialState,
        compose(
        applyMiddleware(
            thunk ,
            logger,
            //saveRoleField,
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose
        )
    );

    return store
}
