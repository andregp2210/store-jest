import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Component renders', () => {
    expect(footer.length).toEqual(1);
  });
  test('Component renders title', () => {
    expect(footer.find('[data-testid="footerTitle"]').text()).toEqual(
      'Platzi Stores'
    );
  });
  test('Component renders rights', () => {
    expect(footer.find('.Footer-copy').text()).toEqual(
      'Todos los Izquierdos Reservadoss'
    );
  });
});

describe('Footer Snapshot', () => {
  test('Footer UI Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
