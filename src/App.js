import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import P5Wrapper from 'react-p5-wrapper';

const sketch = (p) => {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(100);
    p.noStroke();

    p.push();
    p.translate(-150, 100);
    p.rotateY(rotation);
    p.rotateX(-0.9);
    p.box(100);
    p.pop();

    p.noFill();
    p.stroke(255);
    p.push();
    p.translate(500, p.height*0.35, -200);
    p.sphere(300);
    p.pop();
  };
};

const sketch2 = (p) => {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(100);
    p.noStroke();

    p.push();
    p.translate(-150, 100);
    p.rotateY(rotation);
    p.rotateX(-0.9);
    p.box(100);
    p.pop();

    p.noFill();
    p.stroke(255);
    p.push();
    p.translate(500, p.height*0.35, -200);
    p.sphere(300);
    p.pop();
  };
};

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      rotation: 150,
      stateSketch: sketch,
    };
  }

  rotationChange(e){
    this.setState({rotation:e.target.value});
  }

  pressEvent(){
    this.state.stateSketch === sketch ? this.setState({stateSketch:sketch2}) : this.setState({stateSketch:sketch});
  }

  render () {
    return (
      <div>
        <P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation}/>
        <input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onInput={this.rotationChange.bind(this)}/>
        <button onClick={this.pressEvent.bind(this)}>Change Sketch</button>
      </div>
    );
  }
}

export default App;
