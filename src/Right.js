import Gauge from './Gauge';

const Right = (props) => {

    const indicators = props.indicators;

    // extract data

    const numStaticIssues = indicators[0]['issues'];
    const numStaticChecks = indicators[0]['checks'];
    const numRiskIssues = indicators[5]['issues'];

    let scores = indicators.map(indicator => indicator.score);
   
       
    // calculate grade and corresponding color given a score

    const rate = (score) => {   
        if (score >= 90){
            return {color:"#40B884", grade:"Excellent"};
        }else if(score >= 80){
            return {color:"#E1AA4C", grade:"Good"};
        }else{
            return {color:"#E75252", grade:"Average"};
        }
    }

    const [scoreStatic, scoreOnChain, scoreSentiment, scoreGovernance, scoreVolatility, scoreRisk] = scores;

    // calcalate rates
    const rateStatic = rate(scoreStatic);
    const rateOnChain = rate(scoreOnChain);
    const rateVolatility = rate(scoreVolatility);
    const rateRisk = rate(scoreRisk);
    const rateSentiment = rate(scoreSentiment);


    // generate css parameters of a gauge
    const generateGaugeStyle = (score) => {
        return ({
            "width": "100px",
            "--rotation": (score * 1.8) + "deg", // x / 100 * 180 degree
            "--color": rate(score).color,
            "--background": "#e9ecef"  // bg color for gauge ring
        });
    }

    console.log(scoreGovernance);

    const styles = scores.map( score => generateGaugeStyle(score));
    const [styleStatic, styleOnChain, styleSentiment, styleGovernance, styleVolatility, styleRisk] = styles;

    return ( 
       <div className="card-list">

            <div className="card-item">

                <div className="card-text">
                    <h5>Static Analysis</h5>
                    <p> <span style={{color:rateStatic.color}}> {numStaticIssues} </span> issues selected out of {numStaticChecks} vulnerability and security checks</p>
                </div>

                <Gauge style={styleStatic} score={scoreStatic} />

            </div>

            <div className="card-item">

                <div className="card-text">
                    <h5>On-chain Monitoring</h5>
                    <p> <span style={{color:rateOnChain.color}}> {rateOnChain.grade} </span> based on real-time transactional tracking systems </p>
                </div>
              
                <Gauge style={styleOnChain} score={scoreOnChain} />
            </div>

            <div className="card-item">

                <div className="card-text">
                    <h5>Social Sentiment</h5>
                    <p><span style={{color:rateSentiment.color}}> {rateSentiment.grade} </span> {scoreSentiment} based on social monitoring and sentiment analysis </p>
                </div>

                <Gauge style={styleSentiment} score={scoreSentiment} />
               
            </div>

            <div className="card-item">
                <div className="card-text">
                    <h5>Governance & Autonomy</h5>
                    <p> <span style={{color:"#40B884"}}>{1}</span>  security-type certificate found on <a href="http://google.com/">Certik Chain <i class="fa fa-external-link"></i></a></p>
                </div>

                <Gauge style={styleGovernance} score={scoreGovernance} / >
               
            </div>

            <div className="card-item">
                <div className="card-text">
                    <h5>Market Volatility</h5>
                    <p> <span style={{color:rateVolatility.color}}> {rateVolatility.grade} </span> based on indicators over trading volume/liquidity/depth </p>
                </div>

                <Gauge style={styleVolatility} score={scoreVolatility} / >
               
            </div>

    
            <div className="card-item">
                <div className="card-text">
                    <h5>Risk Assessment</h5>
                    <p> <span style={{color:rateRisk.color}}> {rateRisk.grade} </span> based on {numRiskIssues} safety and hazard evaluations </p>
                </div>

                <Gauge style={styleRisk} score={scoreRisk} / >
               
            </div>


       </div>     
    );
}
 
export default Right;