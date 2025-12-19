import "./Layout.css"
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import PlannerCanvas from "../PlannerCanvas";
import { objectsSet } from "../data";

const Layout = () => {
  const [objects, setObjects] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const addObject = (type) => {
    const obj = objectsSet.find((o) => o.type === type);
    if (!obj) return;
    setObjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: obj.type,
        x: 100,
        y: 100,
        rotation: 0,
        image: obj.image,
      },
    ]);
  };

  const rotateSelected = () => {
    if (!selectedId) return;
    setObjects((prev) =>
      prev.map((obj) =>
        obj.id === selectedId
          ? { ...obj, rotation: (obj.rotation + 45) % 360 }
          : obj
      )
    );
  };

  const deleteSelected = () => {
    if (!selectedId) return;
    setObjects((prev) => prev.filter((obj) => obj.id !== selectedId));
    setSelectedId(null);
  };

  const clearAll = () => {
    setObjects([]);
    setSelectedId(null);
  };

  return (
    <div className="layout">
      <Sidebar
        addObject={addObject}
        selectedId={selectedId}
        onRotate={rotateSelected}
        onDelete={deleteSelected}
        onClear={clearAll}
      />
      <PlannerCanvas
        objects={objects}
        setObjects={setObjects}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />

    </div>
  );
};

export default Layout;
