import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend );

const PieChart = ({users, getChartData, getMaleCount, getFemaleCount }) => {

    return (
        <div className='flex items-center border border-gray-600 rounded shadow-2xl w-full md:w-2/5 h-fit m-5 p-5 '>

            <div>
            <h1 className='font-medium underline pb-5'>User Gender Distribution</h1>

            <div>
                {users.length > 0 ? (
                    <Pie data={getChartData} 
                        />
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
            </div>

            {users.length > 0 ? (
            <div className='ml-6 font-medium'>
                <div>Total Users = {users.length}</div>
                <div>Total Mens = {getMaleCount}</div>
                <div>Total Females = {getFemaleCount}</div>
            </div>
            ) : (
                <p>Loading user data...</p>
            )}
        
        </div>
  );
};

export default PieChart;
