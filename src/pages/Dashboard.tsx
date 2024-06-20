import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Dashboard/Dashboard';
import TableOrder from '../components/Dashboard/TableOrder';

const Dashboard: React.FC = () => {      
    return (
        <div className="relative px-4 py-4 ml-16 sm:ml-20 mx-auto lg:px-8 lg:py-8"> 
            <Sidebar/>
            <Main/>
            <TableOrder/>
        </div>
    );
}

export default Dashboard;