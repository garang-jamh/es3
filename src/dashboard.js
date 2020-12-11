import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Grid, Image, Dropdown, Button } from 'semantic-ui-react';

class dashboard extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      data: 'dataFromParent'
    }
  }
    render() {
      const {data} =this.state;
      return (
        <div>
          <ul>
            <h2>Client's Dashboard</h2>
            <h2>Lists of your chosen graphs</h2>
          </ul>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  {this.state.data}
                </Grid.Column>
                <Grid.Column>
                  {this.state.data}
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </div>
      )}
};

export default dashboard;