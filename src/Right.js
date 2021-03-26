const Right = (props) => {

    const indicators = props.indicators;

    console.log(indicators);

    const numStaticIssues = indicators[0]['issues'];
    const numChecks = indicators[0]['checks'];

    const scoreStatic = indicators[0]['score'];
    const scoreOnchain = indicators[1]['score'];
    const scoreSentiment = indicators[2]['score'];

    const scoreVolatility =  indicators[4]['score'];
    const scoreRisk = indicators[5]['score'];
    const numRiskIssues = indicators[5]['issues'];

    const rate = (score) => {
        if (score >= 90){
            return {color:"#40B884", grade:"Excellent"};
        }else if(score >= 80){
            return {color:"#E1AA4C", grade:"Good"};
        }else{
            return {color:"#E75252", grade:"Average"};
        }
    }

    const rateStatic = rate(scoreStatic);
    const rateOnChain = rate(scoreOnchain);
    const rateVolatility = rate(scoreVolatility);
    const rateRisk = rate(scoreRisk);
    const rateSentiment = rate(scoreSentiment);


    const staticGaugeStyle = {
        "width": "100px",
        "--rotation": (scoreStatic * 1.8) + "deg",
        "--color": rateStatic.color,
        "--background": "#e9ecef"
    };


    return ( 
       <div className="card-list">

            <div className="card-item">

                <div className="card-text">
                    <h5>Static Analysis</h5>
                    <p> <text style={{color:rateStatic.color}}> {numStaticIssues} </text> issues selected out of {numChecks} vulnerability and security checks</p>

                </div>

                <div className="card-gauge">
                    <div className="gauge" style={staticGaugeStyle}>
                        <div className="percentage"></div>
                        <div className="mask"></div>
                        <span className="value">{scoreStatic}</span>
                    </div>
                </div> 

            </div>

            <div className="card-item">

                <div className="card-text">
                    <h5>On-chain Monitoring</h5>
                    <p> <text style={{color:rateOnChain.color }}> {rateOnChain.grade} </text> based on real-time transactional tracking systems </p>
                </div>
              
            </div>

            <div className="card-item">

                <div className="card-text">
                    <h5>Social Sentiment</h5>
                    <p><text style={{color:rateSentiment.color }}> {rateSentiment.grade} </text> {scoreSentiment} based on social monitoring and sentiment analysis </p>
                </div>
               
            </div>

            <div className="card-item">
                <div className="card-text">
                    <h5>Governance & Autonomy</h5>
                    <p> <text style={{color:"#40B884"}}>{1}</text>  security-type certificate found on <a href="http://google.com/">Certik Chain</a></p>
                </div>
               
            </div>

            <div className="card-item">
                <div className="card-text">
                    <h5>Market Volatility</h5>
                    <p> <text style={{color:rateVolatility.color }}> {rateVolatility.grade} </text> based on indicators over trading volume/liquidity/depth </p>
                </div>
               
            </div>

    
            <div className="card-item">
                <div className="card-text">
                    <h5>Risk Assessment</h5>
                    <p> <text style={{color:rateRisk.color}}> {rateRisk.grade} </text> based on {numRiskIssues} safety and hazard evaluations </p>
                </div>
               
            </div>


       </div>     
    );
}
 
export default Right;