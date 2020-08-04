import React from 'react';

const MusicSelector = (props) => {
  const options = props.tracks.map(selectedTrack => {
    return <option value={selectedTrack.selectedTrack} key={selectedTrack.selectedTrack}>
    {selectedTrack.title}
    </option>
  })

function handleChange(event){
  props.onTrackSelected(event.target.value)
}



}

export default MusicSelector;
