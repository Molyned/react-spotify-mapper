import React, { Component } from 'react';
import Plotly from 'plotly.js-mapbox-dist'
// import createPlotlyComponent from ' react-plotly.js/factory';
import axios from 'axios';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);
require('dotenv').config({path: __dirname + '/.env'});

const API_KEY = 'pk.eyJ1IjoibW9seW5lZCIsImEiOiJjanppcHc0cHkwMTdpM2RtenJncTJ1anFlIn0.dR3SV6IYSxK0VIAo3qyKuA'





export default class AllArtistMap extends Component {
  componentDidMount() {
    axios.post('http://127.0.0.1:5000/map').then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {
    Plotly.setPlotConfig({
      mapboxAccessToken: API_KEY
    })
    return (
        <div justify="center"> 
        <Plot
        data={[{
            type:'scattermapbox',
            lat:['45.5017'],
            lon:['-73.5673'],
            mode:'markers',
            marker: {
              size:14
            },
            text:['Montreal']}]}
        layout={
          {autosize: true,
          hovermode:'closest',
          mapbox: {
            bearing:0,
            center: {
              lat:45,
              lon:-73
            },
            pitch:0,
            zoom:5
          },
        }}
          />
          Plotly.plot('myDiv', data, layout)
      </div>
    );
  }
}