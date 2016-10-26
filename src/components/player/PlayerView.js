import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
    View
} from 'react-native';

export default class PlayerView extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    };
    render() {
        return <View>
            <Text>
                {this.props.name} - {this.props.rating}
            </Text>
            <TouchableHighlight onPress={() => this.props.match(this.props.players, this.props.id)}>
                <Text>Match</Text>
            </TouchableHighlight>
        </View>
    };
};