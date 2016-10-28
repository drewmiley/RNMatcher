import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import PlayerView from '../../../src/components/player/PlayerView';

describe('PlayerView', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const component = renderer.create(
                <PlayerView />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});