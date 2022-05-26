import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Facility from './Facility';
import Reviews from './Reviews';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facility></Facility>
            <Products home={true}></Products>
            <Stat></Stat>
            <Reviews home={true}></Reviews>
        </div>
    );
};

export default Home;