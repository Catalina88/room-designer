import React from "react";
import { FiRotateCcw, FiTrash2, FiXCircle } from "react-icons/fi";

const furnitureItems = [
  { id: 1, type: "Sofa", shape: "rect" },
  { id: 2, type: "Bed", shape: "rect" },
  { id: 3, type: "Table", shape: "square" },
  { id: 4, type: "Chair", shape: "circle" },
];


const hoverIn = (e) => {
  e.currentTarget.style.transform = "translateY(-2px)";
  e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.18)";
};

const hoverOut = (e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "none";
};


const objectHoverIn = (e) => {
  e.currentTarget.style.background = "#DCE7C3";
};

const objectHoverOut = (e) => {
  e.currentTarget.style.background = "#E8F0D8";
};


const previewStyle = (shape) => ({
  width: 28,
  height: 28,
  borderRadius:
    shape === "circle" ? "50%" : shape === "square" ? "6px" : "4px",
  background: "#F2F6EA",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: "bold",
  color: "#556B2F",
  marginRight: 10,
  flexShrink: 0,
});

function Sidebar({ addObject, selectedId, onRotate, onDelete, onClear }) {
  return (
    <div
      style={{
        width: 240,
        padding: 16,
        margin: 16,
        borderRadius: 14,
        background: "#ffffff",
        boxSizing: "border-box",
        maxHeight: "90vh",
        overflow: "hidden",
        position: "relative",
        boxShadow: `
          0 14px 28px rgba(0,0,0,0.2),
          0 6px 12px rgba(0,0,0,0.15)
        `,
      }}
    >
      <h3 style={{ marginBottom: 12, color: "#333" }}>Furniture</h3>

      
      {furnitureItems.map((item) => (
        <button
          key={item.id}
          onClick={() => addObject(item.type)}
          draggable
          onDragStart={(e) => e.dataTransfer.setData("type", item.type)}
          onMouseEnter={(e) => {
            hoverIn(e);
            objectHoverIn(e);
          }}
          onMouseLeave={(e) => {
            hoverOut(e);
            objectHoverOut(e);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: 8,
            marginBottom: 8,
            borderRadius: 8,
            border: "1px solid #d6dfc2",
            cursor: "pointer",
            background: "#E8F0D8", 
            color: "#2f3a1f",
            transition: "all 0.2s ease",
          }}
        >
          
          <div style={previewStyle(item.shape)}>
            {item.type.charAt(0)}
          </div>

          {item.type}
        </button>
      ))}

      
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <button
          onClick={onRotate}
          disabled={!selectedId}
          onMouseEnter={selectedId ? hoverIn : undefined}
          onMouseLeave={selectedId ? hoverOut : undefined}
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #96b169ff",
            cursor: selectedId ? "pointer" : "not-allowed",
            opacity: selectedId ? 1 : 0.5,
            background: "#96b169ff",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            transition: "all 0.2s ease",
          }}
        >
          <FiRotateCcw size={16} />
          Rotate
        </button>

        <button
          onClick={onDelete}
          disabled={!selectedId}
          onMouseEnter={selectedId ? hoverIn : undefined}
          onMouseLeave={selectedId ? hoverOut : undefined}
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ddd",
            cursor: selectedId ? "pointer" : "not-allowed",
            opacity: selectedId ? 1 : 0.5,
            background: "#ffebee",
            color: "#c62828",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            transition: "all 0.2s ease",
          }}
        >
          <FiTrash2 size={16} />
          Delete
        </button>
      </div>

      
      <button
        onClick={onClear}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          width: "100%",
          padding: 8,
          marginTop: 10,
          borderRadius: 8,
          border: "1px solid #ddd",
          cursor: "pointer",
          background: "#f5f5f5",
          transition: "all 0.2s ease",
        }}
      >
        <FiXCircle size={16} />
        Clear All
      </button>
    </div>
  );
}

export default Sidebar;
