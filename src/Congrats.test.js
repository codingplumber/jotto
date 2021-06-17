import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr, checkProps } from '../Test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

const setUp = (props = {}) => {
    const setUpProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setUpProps} />)
}

test('renders without error', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when "success" prop is false' , () => {
    const wrapper = setUp({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when "success" prop is true', () => {
    const wrapper = setUp({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw warninn with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
    // const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name);
    // expect(propError).toBeUndefined();
});

// test('', () => {

// });

// test('', () => {

// });
