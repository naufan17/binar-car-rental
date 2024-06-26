import React from 'react';
import TableOrder from './TableOrder'

const Dashboard: React.FC = () => {    
    return (
        <div className="px-4 py-4 ml-16 sm:ml-20 mx-auto md:px-8 md:py-8">
            <div className="flex mb-6 md:mb-8">
                <h2 className="max-w-md font-sans text-xl font-bold text-gray-800 sm:text-2xl">
                    Dashboard
                </h2>
            </div>
            <div className="flex mb-4 md:mb-6">
                <span className="bg-blue-700 px-1 rounded"></span>
                <h2 className="ml-1 font-sans text-base font-bold text-gray-800 sm:text-lg">
                    List Order
                </h2>
            </div>
            <TableOrder/>
        </div>
    );
}

export default Dashboard;