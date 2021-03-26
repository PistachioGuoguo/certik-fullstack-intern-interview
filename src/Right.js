const Right = (props) => {

    const indicators = props.indicators;

    console.log(indicators);

    const numStaticIssues = indicators[0]['issues'];
    const numChecks = indicators[0]['checks'];

    const scoreOnchain = indicators[1]['score'];
    const scoreSentiment = indicators[2]['score'];

    const scoreVolatility =  indicators[4]['score'];
    const scoreRisk = indicators[5]['score'];
    const numRiskIssues = indicators[5]['issues'];

    const rate = (score) => {
        if (score >= 90){
            return "Excellent";
        }else if(score >= 80){
            return "Good";
        }else{
            return "Average";
        }
    }


    return ( 
       <div className="card-list">

            <div className="card-item">
                <h5>Static Analysis</h5>
                <p> {numStaticIssues} issues selected out of {numChecks} vulnerability and security checks</p>
            </div>

            <div className="card-item">
                <h5>On-chain Monitoring</h5>
                <p> {rate(scoreOnchain)} based on real-time transactional tracking systems </p>
            </div>

            <div className="card-item">
                <h5>Social Sentiment</h5>
                <p> {scoreSentiment} based on social monitoring and sentiment analysis </p>
            </div>

            <div className="card-item">
                <h5>Governance & Autonomy</h5>
                <p> {1} security-type certificate found on <a href="http://google.com/">Certik Chain</a></p>
            </div>

            <div className="card-item">
                <h5>Market Volatility</h5>
                <p> {rate(scoreVolatility)} based on indicators over trading volume/liquidity/depth </p>
            </div>

            <div className="card-item">
                <h5>Risk Assessment</h5>
                <p> {rate(scoreRisk)} based on {numRiskIssues} safety and hazard evaluations </p>
            </div>

       </div>     
    );
}
 
export default Right;