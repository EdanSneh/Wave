import React from 'react';

class Wave extends React.Component {
    
    constructor(props) {
        super();
        this.state = {color: '#2196F3', strokeSize: 60};
    } 

    makePath() {
        // console.log()
        if (this.props.func === undefined) {
            return (<path d={"M 0 0 L 0 0 z"} style={{strokeWidth: 10, stroke: this.state.color, fillOpacity: 0}}/>);
        }
        const datax = range(0, 30, .1);

        

        function range(start, end, interval) {
            var ans = [];
            for (let i = start; i <= end; i += interval) {
                ans.push(i);
            }
            return ans;
        }
        let datay = this.props.func(datax);
        let svgData = "M " + datax[0]*this.state.strokeSize + " " + datay[0]*this.state.strokeSize;
        for (let i = 1; i < datax.length; i++) {
            svgData += " L " + datax[i]*this.state.strokeSize + " " + datay[i]*this.state.strokeSize;    
        }
        return (<path d={svgData} style={{strokeWidth: 10, stroke: this.state.color, fillOpacity: 0}}/>);
    }

    makeAxis() {
        return (<path d="M 0 0 L 10000 0" style={{stroke: 'gray', fillOpacity: 0}}/>)
    };

    render() {
        return (
            <svg
                width="800"
                height="390"
                viewBox="500 -500 1000 1000">
                {this.makePath()};
                {this.makeAxis()};
            </svg>
        );
    }
}

export default Wave;