const Gauge = (props) => {

    const {style, score} = props;

    return ( 
        <div className="card-gauge">
        <div className="gauge" style={style}>
            <div className="percentage"></div>
            <div className="mask"></div>
            <span className="value">{score}</span>
        </div>
    </div> 
    );
}
 
export default Gauge;