import React from 'react';

// 1️⃣ Definimos los objetos de manera sencilla en un array
const furnitureItems = [
  { id: 1, type: 'Sofa' },
  { id: 2, type: 'Bed' },
  { id: 3, type: 'Table' },
  { id: 4, type: 'Chair' },
];

function Sidebar({ addObject }) {
  return (
    <div style={{ width: 200, padding: 16, borderRight: '1px solid #ccc' }}>
      <h3>Furniture</h3>

      {/* 2️⃣ Iteramos sobre el array para crear botones automáticamente */}
      {furnitureItems.map((item) => (
        <button
          key={item.id}
          onClick={() => addObject(item.type)}
          draggable
          onDragStart={(e) => e.dataTransfer.setData('type', item.type)}
          style={{
            display: 'block',
            width: '100%',
            padding: 8,
            marginBottom: 8,
            cursor: 'pointer',
          }}
        >
          {item.type}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
