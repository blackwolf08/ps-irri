import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    btn1: 'display',
    btn2: 'display',
    btn3: 'display',
    content: 'no-display',
    title: null
  };

  handleClick = btn => {
    if (btn === 1) {
      this.setState({
        btn1: 'display',
        btn2: 'no-display',
        btn3: 'no-display',
        title: 'Crop Suggestion',
        content: 'display'
      });
    }
    if (btn === 2) {
      this.setState({
        btn1: 'no-display',
        btn2: 'display',
        btn3: 'no-display',
        title: 'Check Condition',
        content: 'display'
      });
    }
    if (btn === 3) {
      this.setState({
        btn1: 'no-display',
        btn2: 'no-display',
        btn3: 'display green',
        title: 'Irrigate Crops',
        content: 'display'
      });
    }
  };

  handleBack = () => {
    this.setState({
      btn1: 'display',
      btn2: 'display',
      btn3: 'display',
      content: 'no-display',
      title: null
    });
  };

  render() {
    return (
      <div className='root'>
        <button onClick={this.handleBack} className='back'>
          <i class='fas fa-arrow-left'></i>
        </button>
        <nav>
          <h3>Smart Irrigation</h3>
        </nav>
        <div className='box'>
          <button
            onClick={() => {
              this.handleClick(1);
            }}
            className={`btn ${this.state.btn1}`}
          >
            Crop Suggestion
          </button>
          <button
            onClick={() => {
              this.handleClick(2);
            }}
            className={`btn ${this.state.btn2}`}
          >
            Check Condition
          </button>
          <button
            onClick={() => {
              this.handleClick(3);
            }}
            className={`btn ${this.state.btn3}`}
          >
            Irrigate Crops
          </button>
          {this.state.btn3 === 'no-display' && (
            <div className={`box1 no-display ${this.state.content}`}>
              <h1 className='h1'>{this.state.title}</h1>
              {this.state.btn1 === 'display' && (
                <div>
                  <p>data</p>
                </div>
              )}
              {this.state.btn2 === 'display' && (
                <div>
                  <p>data</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
