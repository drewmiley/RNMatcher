import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as config from './config';

import * as actions from './constants/actions';

import reducer from './reducers/matcher';

import AppContainer from './containers/AppContainer';

const store = createStore(reducer);

store.dispatch({
    type: actions.SET_STATE,
    state: config.initialState
});

export default class RNMatcher extends Component {
    render() {
        return <Provider store={store}>
            <AppContainer />
        </Provider>
    };
};