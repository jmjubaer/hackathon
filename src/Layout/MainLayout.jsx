import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Page/Common/Header';

const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Header/>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;