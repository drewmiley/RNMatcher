import 'react-native';
import { List, Map } from 'immutable';
import React from 'react';
import renderer from 'react-test-renderer';

import MatchView from '../../../src/components/match/MatchView';

describe('MatchView', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
        	const matchPlayers = List.of(
                Map({name: 'One'}),
                Map({name: 'Two'})
            );
            const component = renderer.create(
                <MatchView matchPlayers={matchPlayers} />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});