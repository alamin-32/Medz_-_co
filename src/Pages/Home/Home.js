import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Facility from './Facility';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facility></Facility>
            <Products home={true}></Products>
            <Stat></Stat>
        </div>
    );
};

export default Home;