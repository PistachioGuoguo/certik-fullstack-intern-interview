import RadarGraph from './RadarGraph.js';

const Left = (props) => {
    const indicators = props.indicators;
    let scores = indicators.map(indicator => indicator.score);

    return (  
        <div className="left-wrapper">

            <div className="radar-wrapper">
                <RadarGraph scores={scores}/>
            </div>

            <div class="left-text-box" id="one">

                <h5>Risk Assessment</h5>
                <p>Leveraging fact-based and multi-faceted safety evaluations</p>

            </div>

            <div class="left-text-box" id="two">

                <h5>Static Analysis</h5>
                <p>Source-code/bytecode scannings via static analysis tool suites</p>

            </div>

            <div class="left-text-box" id="three">

                <h5>On-chain Monitoring</h5>
                <p>Utilizing real-time security monitoring and intelligence systems</p>

            </div>

            <div class="left-text-box" id="four">

                <h5>Social Sentiment</h5>
                <p>Analysis of social growth and wider sentiment variables</p>

            </div>

            <div class="left-text-box" id="five">

                <h5>Governance & Autonomy</h5>
                <p>Contract checking and activity tracing over decentralization practices</p>

            </div>

            <div class="left-text-box" id="six">

                <h5>Market Volatility</h5>
                <p>Measuring over assets' financial factors and market metrics</p>

            </div>


        </div>
    );
}
 
export default Left;