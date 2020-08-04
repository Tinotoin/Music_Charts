import React from 'react';

const MusicDetail = (props) => {
  if(!props.track) return null;
  return (
    <div>
    <h2>{props.selectedTrack.name}</h2>

  )
}

export default MusicDetail;
