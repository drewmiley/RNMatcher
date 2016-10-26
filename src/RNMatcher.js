import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as actions from './constants/actions';

import reducer from './reducers/matcher';

import AppContainer from './containers/AppContainer';

const store = createStore(reducer);

store.dispatch({
    type: actions.SET_STATE,
    state: {}
});

export default class RNMatcher extends Component {
    render() {
        return <Provider store={store}>
            <AppContainer />
        </Provider>
    };
};