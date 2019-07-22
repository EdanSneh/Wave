import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wave from './Components/Wave.js'
import Slider from '@material-ui/core/Slider';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {incr: 0}
    this.state = {func: this.tick(), incr: 0};
    this.tick = this.tick.bind(this);
    this.interval = setInterval(this.tick, 10);
  }

  tick() {
    this.setState((state) => {
      return {incr: state.incr + Math.PI/40}
    });
    const func = (array) => { 
      let data = [];
      array.forEach((x) => data.push(Math.cos(x+this.state.incr)));
      return data;
    }
    return func;
  }
  render() {
    console.log(this.state.incr);
    return (
      <div className="App">
        <header className="App-header">
          <div><h1>Wave</h1></div>
          <div className="Wave"><Wave func={this.state.func}/></div>
          <div className="Sliders">
            Sliders
            <br/>
            <div className="Slider-heads">Amplitude</div>
          <Slider
            defaultValue={20}
            // getAriaVlueText={"valuetext"}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            // marks={marks}
          />
          <Slider
            defaultValue={20}
            // getAriaVlueText={"valuetext"}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            // marks={marks}
          />
          </div>
        </header>
      </div>
      
    );
  }
}

export default App;
