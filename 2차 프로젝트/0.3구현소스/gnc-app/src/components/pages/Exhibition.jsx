import React, { useEffect, useRef } from 'react';
import ArtList from '../modules/ArtList';



export default function Exhibition() {
    const artgridRef = useRef(null);

  useEffect(() => {
    ArtList(artgridRef);
  }, []);

  return (
    <div id="art-showbx" ref={artgridRef}></div>
  );
}
