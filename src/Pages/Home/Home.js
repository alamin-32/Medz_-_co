import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Facility from './Facility';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facility></Facility>
            <Products home={true}></Products>
        </div>
    );
};

export default Home;