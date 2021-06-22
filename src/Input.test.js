import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../Test/testUtils';
import Input from './Input';

const setUp = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord} />);
};

test('renders without error', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
    checkProps(Input, { secretWord: 'party' });
});

describe('state controlled input field', () => {
    test('state updates with value of input box upon change', () => {
        const mockSetCurrentGuess = jest.fn();
        // replace React.useState() with mock function
            // the first value is the state and the second is the mock function to update state
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

        const wrapper = setUp();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        // simulate inputBox getting a value of train
        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
});