import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MatchButton from '../../../src/components/buttons/MatchButton';

describe('MatchButton', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const component = renderer.create(
                <MatchButton />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});