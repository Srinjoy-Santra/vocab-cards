import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

import * as reducers from "./index";

export const INITIAL_STATE = {
    section: {
        current: "All",
        page: 0
    },
    learn: {
        current: {},
        all: []
    }
    /* dePaymentsState:{
        categories: {},
        lastSelectedCategory: {},
        categoryMapping: {},
    }, */
   
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
