import React, { Component } from 'react';

import styles from './SelectList.module.css';

export default class SelectList extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Month'};
      this.state = {values: 'Year'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({value: event.target.values});
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label1>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Month">Month</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
            </select>
          </label1>
          <label2>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Year">Year</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </label2>
        </form>
      );
    }
  }