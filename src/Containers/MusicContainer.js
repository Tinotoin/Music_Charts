import React from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';


class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: [],
      selectedTrack: "",
    };
    this.handleTrackSelected = this.handleTrackSelected.bind(this);
  }

componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

  fetch(url)
  .then(res => res.json())
  .then(trackList => this.setState({tracks: tracks})) // confused what 'tracks' should be here - keeps returning as undefined
  .catch(err => console.error);

}

handleTrackSelected(selectedTrack){
  this.setState({selectedTrack: selectedTrack})
}

render(){

  const selectedTrack = this.state.tracks.find(track => this.state.selectedTrack === track.selectedTrack)

  return(
  <div>
  <h2>Music Charts</h2>
  <MusicSelector track={this.state.tracks}/>
  <MusicDetail track={selectedTrack}/>
  </div>
);

}
}


export default MusicContainer;
