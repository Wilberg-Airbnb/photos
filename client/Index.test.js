import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Index from './Index';

configure({ adapter: new Adapter() });

describe('Should check that the component exists and grabs a description object', () => {
  it('Make sure that the componentDidMount is successfully called', () => {
    const componentDidMountSpy = spyOn(Index.prototype, 'componentDidMount');
    const component = shallow(<Index />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  });
});
