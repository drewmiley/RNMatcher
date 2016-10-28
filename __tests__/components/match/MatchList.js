import 'react-native';
import { List } from 'immutable';
import React from 'react';
import renderer from 'react-test-renderer';

import MatchList from '../../../src/components/match/MatchList';

import Match from '../../../src/object/Match';
import Player from '../../../src/object/Player';

describe('MatchList', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const matches = List.of(
                new Match(1, new Player(1, 'Drew', 10, true), new Player(2, 'James', 20, true), true),
                new Match(2, new Player(3, 'Miley', 30, true), new Player(4, 'Test', 40, true), true)
            );
            const component = renderer.create(
                <MatchList matches={matches} />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});