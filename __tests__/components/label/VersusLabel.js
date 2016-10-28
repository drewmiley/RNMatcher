import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import VersusLabel from '../../../src/components/label/VersusLabel';

describe('VersusLabel', () => {

    describe('Rendering', () => {

        it('should match the snapshot', () => {
            const component = renderer.create(
                <VersusLabel />
            );            
            expect(component).toMatchSnapshot();
        });

    });

});