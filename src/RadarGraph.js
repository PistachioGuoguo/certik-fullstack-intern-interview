import {Radar} from 'react-chartjs-2';

const RadarGraph = (props) => {

    const data = {
        labels: ['Static Analysis', 'On-chain Monitoring', 'Social Sentiment', 'Governance & Autonomy', 'Market Volatility', 'Risk Assessment'],
        datasets: [{    
            data: props.scores,
            backgroundColor: "rgba(167, 190, 220, 0.3)",
            borderColor: '#4980ca',
            borderWidth: 1
        }]
    };

    const options = {
        legend: {
            display: false
        },
        scale: {
            ticks: {
                min: 0,
                max: 100,
                maxTicksLimit:20
            },

            pointLabels:{
                fontSize: 0       
            },
        }
    };

    return ( 
        <Radar data={data} options={options} height={530}/>
     );
}
 
export default RadarGraph;