import React from "react";
import RoomDesignerCanvas from "./components/RoomDesignerCanvas";
import ListofObject from "./components/ListofObjects";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Room Designer (Konva.js)
      </h1>

      <RoomDesignerCanvas />
    </div>
  );
}

export default App;
