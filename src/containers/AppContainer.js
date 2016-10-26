import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import * as config from '../config';

import * as actionCreators from '../actions/matcher';

// import MatchButton from '../components/buttons/MatchButton';
// import MatchList from '../components/match/MatchList';
import PlayerList from '../components/player/PlayerList';

class App extends Component {
    componentDidMount() {
        if (config.playerFeed) {
            config.playerFeed(this.props.addPlayer);
        };
    };
    render() {
        return <View style={styles.container}>
            <Text>
                Matcher
            </Text>
            <PlayerList {...this.props} />
        </View>
    };
};
            // <MatchButton {...this.props} />
            // <MatchList {...this.props} />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

actionCreators.matcher(config.matcher);

const mapStateToProps = state => {
    return {
        matches: state.get('matches'),
        players: state.get('players')
    };
}

export default AppContainer = connect(mapStateToProps, actionCreators)(App);