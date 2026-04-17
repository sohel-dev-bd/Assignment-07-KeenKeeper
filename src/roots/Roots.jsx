import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';
import { ToastContainer } from 'react-toastify';

const Roots = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />

        <ToastContainer 
        position='top-center'
        />
        </>
    );
};

export default Roots;