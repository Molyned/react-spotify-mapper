import React, { Component } from 'react';
import Plotly from 'plotly.js-mapbox-dist'
import createPlotlyComponent from ' react-plotly.js/factory';
import axios from 'axios';
const Plot = createPlotlyComponent(Plotly);
require('dotenv').config({path: __dirname + '/.env'});

const API_KEY = process.env.REACT_APP_MAP_KEY;


export default class AllArtistMap extends Component {
  componentDidMount() {
    console.log("FUCK")
    axios.post('http://127.0.0.1:5000/map').then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {
    return (
        <div justify="center"> 
        asssssssssssssssss
      </div>
    );
  }
}