import React from 'react';

const furnitureItems = [
  { id: 1, type: 'Sofa' },
  { id: 2, type: 'Bed' },
  { id: 3, type: 'Table' },
  { id: 4, type: 'Chair' },
];

function Sidebar({ addObject, selectedId, onRotate, onDelete, onClear }) {
  return (
    <div style={{ width: 200, padding: 16, borderRight: '1px solid #ccc' }}>
      <h3>Furniture</h3>

      {furnitureItems.map((item) => (
        <button
          key={item.id}
          onClick={() => addObject(item.type)}
          draggable
          onDragStart={(e) => e.dataTransfer.setData('type', item.type)}
          style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
        >
          {item.type}
        </button>
      ))}

      <button
        onClick={onRotate}
        disabled={!selectedId}
        style={{
          display: 'block',
          width: '100%',
          padding: 8,
          marginTop: 16,
          cursor: selectedId ? 'pointer' : 'not-allowed',
          opacity: selectedId ? 1 : 0.5,
        }}
      >
        🔄 Rotate Selected
      </button>

      <button
        onClick={onDelete}
        disabled={!selectedId}
        style={{
          display: 'block',
          width: '100%',
          padding: 8,
          marginTop: 8,
          cursor: selectedId ? 'pointer' : 'not-allowed',
          opacity: selectedId ? 1 : 0.5,
          color: 'red',
        }}
      >
        🗑️ Delete Selected
      </button>

      <button
        onClick={onClear}
        style={{
          display: 'block',
          width: '100%',
          padding: 8,
          marginTop: 8,
          cursor: 'pointer',
        }}
      >
        Clear All
      </button>
    </div>
  );
}

export default Sidebar;
