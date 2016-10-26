import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RNMatcher extends Component {
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