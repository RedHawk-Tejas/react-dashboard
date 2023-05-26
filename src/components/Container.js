import PieChart from './PieChart'
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import AgePieChart from './AgePieChart';

const Container = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try{
                const response = await axios.get('https://randomuser.me/api/?results=5');
                setUsers(response.data.results);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetch();
    }, [])

    const getGenderCountChartData = () => {
        const genderCount = users.reduce((count, user) => {
        const gender = user.gender;
        count[gender] = (count[gender] || 0) + 1;
        return count;
        }, {});
    
        return {
          labels: Object.keys(genderCount),
          datasets: [
            {
              data: Object.values(genderCount),
              backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
              borderColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            },
          ],
        };
    };

    const getMaleCount = () => {
        const male = users.filter(user => user.gender === "male");
        return male.length;
    }

    const getFemaleCount = () => {
        const female = users.filter(user => user.gender === "female");
        return female.length;
    }

    const getAgeCountChartData = () => {
     //  ageGroups = ['> 30', '< 30'];
        const maleCount = [0, 0];
        const femaleCount = [0, 0];

        users.forEach(user => {
            const age = user.dob.age;
            const gender = user.gender;

            if(age < 30){
                if(gender === 'male'){
                    maleCount[0]++;
                } else {
                    femaleCount[0]++;
                }
            } else {
                if(gender === 'male'){
                    maleCount[1]++;
                } else {
                    femaleCount[1]++;
                }
            }
        });

        return {
            labels: ['< 30 (Male)', '< 30 (Female)', '> 30 (Male)', '> 30 (Female)'],
            datasets: [
                {
                    data: [maleCount[0], femaleCount[0], maleCount[1], femaleCount[1]],
                    backgroundColor: [
                        'rgba(110, 247, 151, 0.8)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(240, 88, 88, 0.8)',
                        'rgba(236, 111, 225, 0.8)',
                    ],
                },
            ],
        };
    };

  return (
    <div className='flex flex-wrap border border-gray-500 m-5 w-screen rounded'>
        <PieChart users={users} getChartData={getGenderCountChartData()} getMaleCount={getMaleCount()} getFemaleCount={getFemaleCount()} />
        <AgePieChart users={users} getAgeCountChartData={getAgeCountChartData()}/>
    </div>
  )
}

export default Container