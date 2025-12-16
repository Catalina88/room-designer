// src/components/PlannerCanvas.js
import React from 'react';
import { objectsSet } from './data';

function PlannerCanvas({ objects, onObjectClick, onDropObject }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    onDropObject(type, x, y);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        flex: 1,
        position: 'relative',
        background: '#f0f0f0',
      }}
    >
      {objects.map((obj) => {
        // Encontramos la imagen correspondiente
        const objData = objectsSet.find((o) => o.type === obj.type);
        return (
          <img
            key={obj.id}
            src={objData?.image}
            alt={obj.type}
            onClick={() => onObjectClick(obj)}
            style={{
              position: 'absolute',
              left: obj.x,
              top: obj.y,
              width: 80,
              height: 80,
              cursor: 'pointer',
            }}
          />
        );
      })}
    </div>
  );
}

export default PlannerCanvas;
