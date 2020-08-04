import React from 'react';

const MusicSelector = (props) => {
  const options = props.track.map(tracks => {
    return <option value{tracks.selectedTrack} key={tracks.selectedTrack}>
    {selectedTrack.title}
    </option>
  })

function handleChange(event){
  props.onTrackSelected(event.target.value)
}



}

export default MusicSelector;
