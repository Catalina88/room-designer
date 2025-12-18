import React, { useEffect, useState } from 'react';
import { Image } from 'react-konva';

function GridPlanner() {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const image = new window.Image();
    image.src = '/img/grid.png'; // desde public/img
    image.onload = () => setImg(image);
  }, []);

  return (
    img && (
      <Image
        image={img}
        x={0}
        y={0}
        width={900}
        height={500}
        listening={false}
      />
    )
  );
}

export default GridPlanner;
