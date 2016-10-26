import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import VersusLabel from '../label/VersusLabel';

export default class MatchView extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return this.props.matchPlayers !== nextProps.matchPlayers;
        };
    };
    render() {
        return <View>
            <Text>
                {this.props.matchPlayers.get(0).get('name')}
            </Text>
            <VersusLabel />
            <Text>
                {this.props.matchPlayers.get(1).get('name')}
            </Text>
        </View>
    };
};