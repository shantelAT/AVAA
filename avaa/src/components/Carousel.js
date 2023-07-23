import React, { useEffect } from 'react';

function HomeCarousel() {
  return (
    <div className='carousel' >
      <div>
      <video autoPlay loop type='video/mp4'  src="./video.mp4" style={{width:"100%"}}/>
        
      </div>
    </div>
  );
}

export default HomeCarousel;