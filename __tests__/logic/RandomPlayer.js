import {Map} from 'immutable';

import RandomPlayer from '../../src/logic/RandomPlayer';

describe('RandomPlayer', () => {

    let randomPlayer;

    describe('Plain JS', () => {

        beforeAll(() => {
            randomPlayer = new RandomPlayer();
        });

        it('should return a plain JS random player by default', () => {
            expect(randomPlayer.name).toBeDefined();
            expect(randomPlayer.rating).toBeDefined();
        });

        it('should return a name string of length 10', () => {
            expect(randomPlayer.name.length).toBe(10);
        });

        it('should return a rating value between 1 and 1000 inclusive', () => {
            expect(randomPlayer.rating).toBeGreaterThanOrEqual(1);
            expect(randomPlayer.rating).toBeLessThanOrEqual(1000);
        });

    });

    describe('Immutable Map', () => {

        beforeAll(() => {
            randomPlayer = new RandomPlayer(true);
        });

        it('should return an immutable map if passing a parameter of true', () => {
            expect(randomPlayer.get('name')).toBeDefined();
            expect(randomPlayer.get('rating')).toBeDefined();
        });

        it('should return a name string of length 10', () => {
            expect(randomPlayer.get('name').length).toBe(10);
        });

        it('should return a rating value between 1 and 1000 inclusive', () => {
            expect(randomPlayer.get('rating')).toBeGreaterThanOrEqual(1);
            expect(randomPlayer.get('rating')).toBeLessThanOrEqual(1000);
        });

    });

});