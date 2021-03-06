import React, { Component } from 'react';
import { View } from 'react-native';

import PlayerView from './PlayerView';

export default class PlayerList extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return this.props.players !== nextProps.players;
        };
    };
    render() {
        return <View>
            {this.props.players.map(player =>
                <PlayerView
                    key={player.get('id')}
                    id={player.get('id')}
                    name={player.get('name')}
                    rating={player.get('rating')}
                    {...this.props} />
            )}
        </View>
    };
};