import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });


test('that jest is working', ()=>{
  expect( 1 + 1 ).toEqual( 2 );
});
