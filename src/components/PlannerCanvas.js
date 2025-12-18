import React, { useRef, useEffect } from 'react';
import { Stage, Layer, Image, Transformer } from 'react-konva';
import useImage from 'use-image';

function Furniture({ obj, isSelected, onSelect, onChange }) {
  const imageRef = useRef();
  const trRef = useRef();
  const [image] = useImage(obj.image);

  useEffect(() => {
    if (isSelected && trRef.current && imageRef.current) {
      trRef.current.nodes([imageRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        ref={imageRef}
        image={image}
        x={obj.x}
        y={obj.y}
        width={80}
        height={80}
        rotation={obj.rotation || 0}
        offsetX={40}
        offsetY={40}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) => onChange({ ...obj, x: e.target.x(), y: e.target.y() })}
        onTransformEnd={() => {
          const node = imageRef.current;
          onChange({ ...obj, x: node.x(), y: node.y(), rotation: node.rotation() });
        }}
      />
      {isSelected && <Transformer ref={trRef} rotateEnabled={true} enabledAnchors={[]} />}
    </>
  );
}

export default function PlannerCanvas({ objects, setObjects, selectedId, setSelectedId }) {
  const checkDeselect = (e) => {
    if (e.target === e.target.getStage()) setSelectedId(null);
  };

  const handleChange = (newAttrs) => {
    setObjects((prev) => {
      const others = prev.filter((obj) => obj.id !== newAttrs.id);
      return [...others, newAttrs];
    });
  };

  return (
    <Stage
      width={window.innerWidth - 200}
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
      style={{ backgroundColor: '#f0f0f0' }}
    >
      <Layer>
        {objects.map((obj) => (
          <Furniture
            key={obj.id}
            obj={obj}
            isSelected={obj.id === selectedId}
            onSelect={() => setSelectedId(obj.id)}
            onChange={handleChange}
          />
        ))}
      </Layer>
    </Stage>
  );
}
