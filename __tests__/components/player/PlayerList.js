import 'react-native';
import { List } from 'immutable';
import React from 'react';
import renderer from 'react-test-renderer';

import PlayerList from '../../../src/components/player/PlayerList';

import Player from '../../../src/object/Player';

describe('PlayerList', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const players = List.of(
                new Player(1, 'Drew', 10, true),
                new Player(2, 'James', 20, true),
                new Player(3, 'Miley', 30, true)
            );
            const component = renderer.create(
                <PlayerList players={players} />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});