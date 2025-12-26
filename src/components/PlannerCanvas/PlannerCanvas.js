import React, { useState, useEffect } from 'react';
import GridPlanner from './GridPlanner';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import './PlannerCanvas.css';

function ImageObject({ object, isSelected, setSelectedId, setObjects }) {
  const [img] = useImage(object.image);
  if (!img) return null;

  return (
    <Image
      image={img}
      x={object.x}
      y={object.y}
       width={100}
      height={100}
      rotation={object.rotation}
      draggable
      onClick={() => setSelectedId(object.id)}
      onDragEnd={(e) => {
        const { x, y } = e.target.position();
        setObjects(prev =>
          prev.map(obj => obj.id === object.id ? { ...obj, x, y } : obj)
        );
      }}
      stroke={isSelected ? 'blue' : undefined}
      strokeWidth={isSelected ? 2 : 0}
    />
  );
}

export default function PlannerCanvas({ objects, setObjects, selectedId, setSelectedId }) {
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth - 200, 
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth - 200,
        height: window.innerHeight - 600,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="planner-canvas">
      <GridPlanner width={canvasSize.width} height={canvasSize.height} /> 
      <Stage width={canvasSize.width} height={canvasSize.height} className="konva-stage">
        <Layer>
          {objects.map(obj => (
            <ImageObject
              key={obj.id}
              object={obj}
              isSelected={obj.id === selectedId}
              setSelectedId={setSelectedId}
              setObjects={setObjects}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
