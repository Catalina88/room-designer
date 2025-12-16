// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PlannerCanvas from './components/PlannerCanvas';
import { objectsSet } from './components/data';

function App() {
  const [objects, setObjects] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);

  const addObject = (type) => {
    const obj = objectsSet.find((o) => o.type === type);
    if (!obj) return;
    setObjects((prev) => [
      ...prev,
      { id: Date.now(), type: obj.type, x: 100, y: 100 },
    ]);
  };

  const handleDropObject = (type, x, y) => {
    setObjects((prev) => [
      ...prev,
      { id: Date.now(), type, x, y },
    ]);
  };

  const handleObjectClick = (obj) => setSelectedObject(obj);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar addObject={addObject} />
        <PlannerCanvas
          objects={objects}
          onObjectClick={handleObjectClick}
          onDropObject={handleDropObject}
        />
      </div>
      {selectedObject && (
        <div style={{ padding: 20, borderLeft: '1px solid #ccc', width: 300 }}>
          <h3>Selected Object: {selectedObject.type}</h3>
          <p>
            Position: ({Math.round(selectedObject.x)},{' '}
            {Math.round(selectedObject.y)})
          </p>
          <button onClick={() => setSelectedObject(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
