import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/matcher';

class App extends Component {
    render() {
        return <View style={styles.container}>
            <Text>
                Matcher
            </Text>
            <Text>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
            </Text>
        </View>
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

const mapStateToProps = state => {
    return {};
}

export default AppContainer = connect(mapStateToProps, actionCreators)(App);