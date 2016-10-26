import React, { Component } from 'react';
import { View } from 'react-native';

import MatchView from './MatchView';

export default class MatchList extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return this.props.matches !== nextProps.matches;
        };
    };
    render() {
        return <View>
            {this.props.matches.map(match =>
                <MatchView
                    key={match.get('id')}
                    matchPlayers={match.get('players')}
                    {...this.props} />
            )}
        </View>
    };
};