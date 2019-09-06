import React, {Component} from 'react';
import './App.css';
// import AllArtistMap from './components/allArtistMap';
import axios from 'axios';
export class App extends Component {
  state = {
    map: undefined
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/map').then(response => {
    let map = response.data
    console.log(map);
      // this.setState({map: map})
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
  return (
    <div className="App">
      {/* <AllArtistMap/> */}
      {this.state.map}

    </div>
  );
}
}

export default App;
