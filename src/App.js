import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    btn1: 'display',
    btn2: 'display',
    btn3: 'display',
    content: 'no-display',
    title: null
  };

  handleClick = async btn => {
    if (btn === 1) {
      this.setState({
        loading: true
      });
      let res = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://crops-jiit.herokuapp.com/suggest'
      );
      res = JSON.parse(JSON.stringify(res.data));
      // console.log(JSON.parse(res.data));
      this.setState({
        btn1: 'display',
        btn2: 'no-display',
        btn3: 'no-display',
        title: 'Crop Suggestion',
        content: 'display',
        data: res.data,
        loading: false
      });
    }
    if (btn === 2) {
      this.setState({
        loading: true
      });
      let res = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://crops-jiit.herokuapp.com/present'
      );
      console.log(res.data);
      this.setState({
        btn1: 'no-display',
        btn2: 'display',
        btn3: 'no-display',
        title: 'Check Condition',
        content: 'display',
        data: res.data.data,
        loading: false
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
    if (this.state.loading) {
      return (
        <div className='root'>
          <button onClick={this.handleBack} className='back'>
            <i className='fas fa-arrow-left'></i>
          </button>
          <nav>
            <h3>Smart Irrigation</h3>
          </nav>
          <div className='box'>
            <div className={`box1`}>Loading</div>
          </div>
        </div>
      );
    }
    return (
      <div className='root'>
        <button onClick={this.handleBack} className='back'>
          <i className='fas fa-arrow-left'></i>
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

          {this.state.btn3 === 'no-display' && (
            <div className={`box1 no-display ${this.state.content}`}>
              <h1 className='h1'>{this.state.title}</h1>
              {this.state.btn1 === 'display' && (
                <div>
                  {this.state.data.map(el => {
                    console.log(parseFloat(el[1]));
                    if (parseInt(el[1]) <= 999) {
                      return <p key={parseInt(el[1])}>{el[0]}</p>;
                    }
                    return <></>;
                  })}
                </div>
              )}
              {this.state.btn2 === 'display' && (
                <div
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <p>Temperature - {this.state.data[0]}</p>
                  <p>Humidity - {this.state.data[1]}</p>
                  <p>Moisture - {this.state.data[2]}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
