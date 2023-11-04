import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {

    const localStorageData = JSON.parse(localStorage.getItem("donation"));
    const yourDonation =  (localStorageData.length*100)/12;
    const totalDonation = (100 - yourDonation);

    const data = {
        labels: ['Total Donation', 'Your Donation'],
        datasets: [
          {
            label: '',
            data: [totalDonation, yourDonation],
            backgroundColor: [
              '#FF444A',
              '#00C49F',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div className='w-[500px] h-[500px] mx-auto mt-20'>
            <Pie data={data} />;
        </div>
    );
};

export default Statistics;