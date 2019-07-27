import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wave from './Components/Wave.js'
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button'
import Tone from "react-tone";


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {incr: 0, amp: 2}
    this.state = {func: undefined, incr: 0, amp: .5, freq: 1, distance: 0};
    this.tick = this.tick.bind(this);
    this.startInterval();
    }
  startInterval() {
    this.interval = setInterval(() => this.tick(), 10);
  }

  stopInterval() {
    clearInterval(this.interval);
  }
  
  tick() {
    //for initialization
    const {amp, freq, distance, incr} = this.state;
    this.setState((state) => {
      return {incr: state.incr + Math.PI/40}
    });
    const tempFunc = (array) => { 
      let data = [];
      // this.state.data.push(distance + amp * Math.cos(freq * (data[]) + this.state.incr));
      // data = data.slice(1, data.length - 1);
      array.forEach((x) => data.push(-distance + amp * Math.cos(freq * (x) + incr)));
      return data;
    }
    this.setState({func: tempFunc});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><h1>Sound Wave</h1></div>
          <div className="Wave"><Wave func={this.state.func}/></div>
          <div className="Sliders">
            Sliders
            <br/>
            <div className="Slider-heads">Amplitude</div>
          <Button
          
          />
          <Slider
            defaultValue={this.state.amp}
            aria-labelledby="discrete-slider-custom"
            step={.1}
            valueLabelDisplay="auto"
            min = {0}
            max = {8}
            onChange = {(e, val) => (this.setState({amp: val}))}
          />
          <br/>
            <div className="Slider-heads">Frequency</div>
          <Slider
            defaultValue={this.state.freq}
            aria-labelledby="discrete-slider-custom"
            step={.1}
            valueLabelDisplay="auto"
            min = {.1}
            max = {3}
            onChange = {(e, val) => (this.setState({freq: val}))}
          />
          <br/>
            <div className="Slider-heads">Distance</div>
          <Slider
            defaultValue={this.state.distance}
            // getAriaVlueText={"valuetext"}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            min = {-10}
            max = {10}
            onChange = {(e, val) => (this.setState({distance: val}))}
            // marks={marks}
          />
          <Tone
          play={true}
          onStop={this.handleToneStop}
          frequency={this.state.freq*1000+this.state.distance*10}
          volume={this.state.amp/8}
          length={1000}
          />
          {/* <br/>
            <div className="Slider-heads">incr</div>
          <Slider
            defaultValue={this.state.incr}
            // getAriaVlueText={"valuetext"}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            min = {-10}
            max = {10}
            onChange = {(e, val) => (this.setState({incr: val}))}
            // marks={marks}
          /> */}
          
          </div>
        </header>
      </div>
      
    );
  }
}

export default App;
