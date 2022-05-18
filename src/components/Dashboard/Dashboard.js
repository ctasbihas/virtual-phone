import React from 'react';
import MixBarChart from '../Charts/MixBarChart';
import StackedAreaChart from '../Charts/StackedAreaChart';
 
const Dashboard = () => {
    return (
      <div className="flex">
        <MixBarChart />
        <StackedAreaChart/>
      </div>
    );
};
 
export default Dashboard;