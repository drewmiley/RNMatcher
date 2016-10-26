import * as actions from '../constants/actions';

let _matcher = null;

export const matcher = setMatcher => {
    if (!setMatcher) {
        return _matcher;
    }
    _matcher = setMatcher;
}

export const addPlayer = player => {
    return {
        type: actions.ADD_PLAYER,
        player
    }
}

export const match = (players, playerID) => {
    const matchedPlayers = _matcher ? _matcher(players, playerID) : null;
    return {
        type: actions.MATCH,
        matchedPlayers
    }
}