import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Plotly from 'plotly.js-mapbox-dist'
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);
require('dotenv').config({path: __dirname + '/.env'});

const API_KEY = process.env.REACT_APP_MAP_KEY;


export default class AllArtistMap extends Component {
  render() {
    Plotly.setPlotConfig({
      mapboxAccessToken: API_KEY 
    })
    console.log(process.env.REACT_APP_MAP_KEY)
    console.log(require('dotenv').config())
    return (
        <div justify="center"> 
        
            <Plot
                data={[
                {
                  type:'scattermapbox',
                  lat:['45.5017'],
                  lon:['-73.5673'],
                  name: 'Dog',
                  mode:'markers',
                  marker: {
                    size:14
                  },
                  text:'Montreal',
                  hoverinfo:'text'
                },
                ]}
                layout={{width: 2000,
                         height: 1000,
                          hovermode:'closest',
                          mapbox: {
                            bearing:0,
                            center: {
                              lat:45,
                              lon:-73
                            },
                            pitch:0,
                            zoom:5,
                            style:'light',
                            showlegend: true,
                          }, 
                          title: 'A Plot'}}
            />
      </div>
    );
  }
}