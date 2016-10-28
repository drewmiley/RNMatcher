import {List, Map, fromJS} from 'immutable';

import * as actions from '../../src/constants/actions';

import Match from '../../src/object/Match';
import Player from '../../src/object/Player';

import reducer from '../../src/reducers/matcher';

describe('reducer', () => {

    describe('SET_STATE', () => {

        it('handles SET_STATE', () => {
            const initialState = Map();
            const action = {
                type: actions.SET_STATE,
                state: Map({
                    players: List.of(
                        new Player(1, 'Drew', 10, true),
                        new Player(2, 'James', 20, true),
                        new Player(3, 'Miley', 30, true)
                    )
                })
            };

            const nextState = reducer(initialState, action);

            expect(nextState.toJS()).toEqual({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30)]
            });
        });

        it('handles SET_STATE without initial state', () => {
            const action = {
                type: actions.SET_STATE,
                state: Map({
                    players: List.of(
                        new Player(1, 'Drew', 10, true),
                        new Player(2, 'James', 20, true),
                        new Player(3, 'Miley', 30, true)
                    )
                })
            };

            const nextState = reducer(undefined, action);

            expect(nextState.toJS()).toEqual({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30)]
            });
        });

        it('handles SET_STATE with plain js payload', () => {
            const initialState = Map();
            const action = {
                type: actions.SET_STATE,
                state: {
                    players: [new Player(1, 'Drew', 10),
                        new Player(2, 'James', 20),
                        new Player(3, 'Miley', 30)]
                }
            };

            const nextState = reducer(initialState, action);

            expect(nextState.toJS()).toEqual({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30)]
            });
        });

        it('handles SET_STATE with plain js payload and without initial state', () => {
            const action = {
                type: actions.SET_STATE,
                state: {
                    players: [new Player(1, 'Drew', 10),
                        new Player(2, 'James', 20),
                        new Player(3, 'Miley', 30)]
                }
            };

            const nextState = reducer(undefined, action);

            expect(nextState.toJS()).toEqual({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30)]
            });
        });

    });

    describe('ADD_PLAYER', () => {

        it('adds a player to the list of players', () => {
            const initialState = fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30)]
            });

            const action = {
                type: actions.ADD_PLAYER,
                player: new Player(undefined, 'New', 3)
            };

            const nextState = reducer(initialState, action);

            expect(nextState.toJS()).toEqual({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30),
                    new Player(4, 'New', 3)]
            });
        });

        it('generates an id one higher than the highest current id for the added player', () => {
            const initialState = fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(7, 'Miley', 30)]
            });

            const action = {
                type: actions.ADD_PLAYER,
                player: new Player(undefined, 'New', 3)
            };

            const nextState = reducer(initialState, action);

            expect(nextState.toJS()).toEqual({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(7, 'Miley', 30),
                    new Player(8, 'New', 3)]
            });

        });

        it('generates an id of one when it is the first player', () => {
            const initialState = fromJS({
                players: []
            });

            const action = {
                type: actions.ADD_PLAYER,
                player: new Player(undefined, 'Drew', 10)
            };

            const nextState = reducer(initialState, action);

            expect(nextState.toJS()).toEqual({
                players: [new Player(1, 'Drew', 10)]
            });

        });

    });

    describe('MATCH', () => {

        it('should match the players up in pairs - even', () => {
            const initialState = fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30),
                    new Player(4, 'Ran', 40)],
                matches: []
            });

            const matchedPlayers = List.of(
                List.of(1, 2),
                List.of(3, 4)
            );

            const action = {
                type: actions.MATCH,
                matchedPlayers
            };

            const nextState = reducer(initialState, action);

            expect(nextState.get('players').size).toBe(0);

            expect(nextState.get('matches').size).toBe(2);

            expect(nextState.get('matches').get(0).get('players').toJS()).toContainEqual(new Player(1, 'Drew', 10));
            expect(nextState.get('matches').get(0).get('players').toJS()).toContainEqual(new Player(2, 'James', 20));
            expect(nextState.get('matches').get(1).get('players').toJS()).toContainEqual(new Player(3, 'Miley', 30));
            expect(nextState.get('matches').get(1).get('players').toJS()).toContainEqual(new Player(4, 'Ran', 40));
        });

        it('should match the players up in pairs - odd', () => {
            const initialState = fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30),
                    new Player(4, 'Ran', 40),
                    new Player(5, 'Hello', 50)],
                matches: []
            });

            const matchedPlayers = List.of(
                List.of(1, 2),
                List.of(3, 4)
            );

            const action = {
                type: actions.MATCH,
                matchedPlayers
            };

            const nextState = reducer(initialState, action);

            expect(nextState.get('players').size).toBe(1);
            expect(nextState.get('players').get(0).toJS()).toEqual(new Player(5, 'Hello', 50));

            expect(nextState.get('matches').size).toBe(2);

            expect(nextState.get('matches').get(0).get('players').toJS()).toContainEqual(new Player(1, 'Drew', 10));
            expect(nextState.get('matches').get(0).get('players').toJS()).toContainEqual(new Player(2, 'James', 20));
            expect(nextState.get('matches').get(1).get('players').toJS()).toContainEqual(new Player(3, 'Miley', 30));
            expect(nextState.get('matches').get(1).get('players').toJS()).toContainEqual(new Player(4, 'Ran', 40));
        });

        it('generates an id one higher than the highest current id for the new match', () => {
            const initialState = fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30),
                    new Player(4, 'Ran', 40),
                    new Player(5, 'Hello', 50)],
                matches: [new Match(3, new Player(7, 'One', 20), new Player(8, 'Two', 20))]
            });

            const matchedPlayers = List.of(
                List.of(1, 2),
                List.of(3, 4)
            );

            const action = {
                type: actions.MATCH,
                matchedPlayers
            };

            const nextState = reducer(initialState, action);

            expect(nextState.get('matches').size).toBe(3);
            expect(nextState.get('matches').get(1).get('id')).toBe(4);
            expect(nextState.get('matches').get(2).get('id')).toBe(5);
        });

        it('should be able to handle a null parameter', () => {
            const initialState = fromJS({
                players: [new Player(1, 'Drew', 10),
                    new Player(2, 'James', 20),
                    new Player(3, 'Miley', 30),
                    new Player(4, 'Ran', 40),
                    new Player(5, 'Hello', 50)],
                matches: [new Match(3, new Player(7, 'One', 20), new Player(8, 'Two', 20))]
            });

            const action = {
                type: actions.MATCH,
                matchedPlayers: null
            };

            const nextState = reducer(initialState, action);

            expect(nextState.get('matches').size).toBe(1);
        });

    });

});