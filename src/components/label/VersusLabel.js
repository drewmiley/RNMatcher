import React, { Component } from 'react';
import { Text } from 'react-native';

export default class VersusLabel extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    };
    render() {
        return <Text> Versus </Text>
    };
};