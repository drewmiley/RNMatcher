import {List, Map} from 'immutable';

import * as actions from '../constants/actions';

import Match from '../object/Match';

const getNextID = (state, accessor, initialValue) => {
    let nextId = initialValue === parseInt(initialValue, 10) ? initialValue : 0;
    if (state.get(accessor).size > 0 && nextId <= state.get(accessor).map(item => item.get('id')).max()) {
        nextId = state.get(accessor).map(item => item.get('id')).max() + 1;
    } else {
        nextId++;
    }
    return nextId;
}

const setState = (state, newState) => {
    if (!newState) {
        return state;
    }
    return state.mergeDeep(newState);
}

const addPlayer = (state, player) => {
    if (!player) {
        return state;
    }

    const nextId = getNextID(state, 'players');
    let newPlayer = player;
    newPlayer.id = nextId;
    return state.update('players', players => players.push(Map(newPlayer)));
}

const match = (state, matchedPlayers) => {
    if (!matchedPlayers) {
        return state;
    }

    let nextId;

    const newMatches = matchedPlayers.map(match => {
        let player = state.get('players').find(
            player => player.get('id') === match.get(0)
        );
        let matchedPlayer = state.get('players').find(
            player => player.get('id') === match.get(1)
        );
        nextId = getNextID(state, 'matches', nextId);

        return new Match(nextId, player, matchedPlayer, true);
    });

    return state.update('players', players => players.filter(player => !matchedPlayers.flatten().includes(player.get('id'))))
        .update('matches', matches => matches.concat(newMatches));
}

export default (state = Map(), action) => {
    switch (action.type) {
        case actions.SET_STATE:
            return setState(state, action.state);
        case actions.MATCH_PLAYER:
            return matchPlayer(state, action.playerID, action.matchedPlayerID);
        case actions.ADD_PLAYER:
            return addPlayer(state, action.player);
        case actions.MATCH:
            return match(state, action.matchedPlayers);
        default:
            return state;
    }
    return state;
}