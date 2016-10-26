import React, { Component } from 'react';
import {
	Text,
	TouchableHighlight
} from 'react-native';

export default class MatchButton extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = (nextProps, nextState) => {
            return this.props.players !== nextProps.players;
        };
    };
    render() {
        return <TouchableHighlight onPress={() => this.props.match(this.props.players)}>
        	<Text>
        		Match
        	</Text>
        </TouchableHighlight>
    };
};