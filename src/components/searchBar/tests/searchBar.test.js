import React from 'react';
import {shallow} from 'enzyme';
import SearchBarComponent from '../searchBar';


describe('SearchBar',()=>{
    it('should render search bar correctly', ()=>{
        const wrapper = shallow(<SearchBarComponent />)
        expect(wrapper).toMatchSnapshot()
    })
})