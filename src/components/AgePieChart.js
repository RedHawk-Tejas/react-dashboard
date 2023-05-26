import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend );

const AgePieChart = ({users, getAgeCountChartData}) => {
  return (
    <div className='border border-gray-600 rounded h-fit m-5 p-5 shadow-2xl'>
        <h1 className='font-medium underline pb-5'>User Age Distribution</h1>

        {users.length > 0 ? (
            <Pie data={{ ...getAgeCountChartData }}/>
        ) : (
            <div>Loading...</div>
        )}
        
        
    </div>
  )
}

export default AgePieChart