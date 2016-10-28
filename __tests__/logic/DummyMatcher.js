import {List, Map} from 'immutable';

import DummyMatcher from '../../src/logic/DummyMatcher';
import Player from '../../src/object/Player';

let players;

beforeAll(() => {
    players = List.of(
        new Player(1, 'Drew', 10, true),
        new Player(2, 'James', 20, true),
        new Player(3, 'Miley', 30, true),
        new Player(4, 'Player', 40, true)
    );   
});

describe('DummyMatcher', () => {

    let matches;

    beforeAll(() => {
        matches = DummyMatcher(players);
    });

    it('should return an immutable list of pairwise array', () => {
        expect(List.isList(matches)).toBe(true);
        expect(matches.get(0).size).toBe(2);
        expect(matches.get(1).size).toBe(2);
    });

    it('should have a size of the number of players divided by two floored', () => {
        expect(matches.size).toBe(2);

        const players2 = List.of(
            new Player(1, 'Drew', 10, true),
            new Player(2, 'James', 20, true),
            new Player(3, 'Miley', 30, true)
        );

        const matches2 = DummyMatcher(players2);

        expect(matches2.size).toBe(1);
    });

});

describe('PlayerDummyMatcher', () => {

    it('should return a single pair containing the initial player id', () => {
        const playerMatch = DummyMatcher(players, 2).get(0);
        expect(playerMatch.toJS()).toContain(2);
        
        expect(List.isList(playerMatch)).toBe(true);
        expect(playerMatch.size).toBe(2);

        expect(playerMatch.get(0)).toBe(2);
        expect(playerMatch.get(1)).not.toBe(2);
        expect(playerMatch.get(1)).toBeGreaterThanOrEqual(1);
        expect(playerMatch.get(1)).toBeLessThanOrEqual(4);
    });

    it('should return null if there is only one player', () => {
        const players3 = List.of(
            new Player(1, 'Drew', 10, true)
        )

        const playerMatch = DummyMatcher(players3, 1);

        expect(playerMatch).toBe(null);
    })

});