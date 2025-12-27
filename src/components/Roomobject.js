import React, { useEffect, useState } from 'react';
import { Image } from 'react-konva';

const IMAGE_MAP = {
  sofa: '/furniture/sofa.png',
  bed: '/furniture/bed.png',
  table: '/furniture/table.png',
  chair: '/furniture/chair.png',
};

function RoomObject({ object, onClick }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = IMAGE_MAP[object.type];

    img.onload = () => setImage(img);
    img.onerror = () => console.error('Error loading', img.src);
  }, [object.type]);

  if (!image) return null;

  return (
    <Image
      image={image}
      x={object.x}
      y={object.y}
      width={80}
      height={80}
      draggable
      onClick={onClick}   
    />
  );
}

export default RoomObject;

