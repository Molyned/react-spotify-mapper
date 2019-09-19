import React, {Component} from 'react';
import './App.css';
import AllArtistMap from './components/allArtistMap';
import axios from 'axios';
export class App extends Component {
  state = {
    map: ' Loading Map...'
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/map').then(response => {
    let map = response.data
    // let mapObj = JSON.parse(map)
    let JSONstring = JSON.stringify(map)
    let JSONobj = JSON.parse(JSONstring)
    // console.log(map);
      this.setState({map: map})
      console.log(map)
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <AllArtistMap/>
        {/* <div dangerouslySetInnerHTML={{__html: this.state.map}}/> */}
        {/* {this.state.map} */}
      </div>
    );
}
}

export default App;
