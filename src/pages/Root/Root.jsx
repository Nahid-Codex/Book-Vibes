import React from 'react';
import Navbar from '../../conponents/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../conponents/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;