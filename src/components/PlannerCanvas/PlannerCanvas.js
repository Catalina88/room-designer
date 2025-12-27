import React, { useState, useEffect, useRef } from "react";
import GridPlanner from "./GridPlanner";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import "./PlannerCanvas.css";

const GRID_SIZE = 40;

function ImageObject({ object, isSelected, setSelectedId, setObjects }) {
  const [img] = useImage(object.image);
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected && trRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  if (!img) return null;

  return (
    <React.Fragment>
      <Image
        ref={shapeRef}
        image={img}
        x={object.x}
        y={object.y}
        width={object.width || 100}
        height={object.height || 100}
        rotation={object.rotation}
        draggable
        onClick={(e) => {
          e.cancelBubble = true;
          setSelectedId(object.id);
        }}
        onDragEnd={(e) => {
          const node = e.target;
          const newX = Math.round(node.x() / GRID_SIZE) * GRID_SIZE;
          const newY = Math.round(node.y() / GRID_SIZE) * GRID_SIZE;

          setObjects((prev) =>
            prev.map((obj) =>
              obj.id === object.id ? { ...obj, x: newX, y: newY } : obj
            )
          );
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);

          setObjects((prev) =>
            prev.map((obj) =>
              obj.id === object.id
                ? {
                    ...obj,
                    x: node.x(),
                    y: node.y(),
                    width: node.width() * scaleX,
                    height: node.height() * scaleY,
                  }
                : obj
            )
          );
        }}
        stroke={isSelected ? "#4A90E2" : undefined}
        strokeWidth={isSelected ? 2 : 0}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          rotateEnabled={false}
          keepRatio={false}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 10 || newBox.height < 10) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
}

export default function PlannerCanvas({
  objects,
  setObjects,
  selectedId,
  setSelectedId,
}) {
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth - 200,
    height: window.innerHeight - 100,
  });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth - 200,
        height: window.innerHeight - 100,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="planner-canvas">
      <GridPlanner width={canvasSize.width} height={canvasSize.height} />

      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        className="konva-stage"
        onMouseDown={(e) => {
          if (e.target === e.target.getStage()) {
            setSelectedId(null);
          }
        }}
      >
        <Layer>
          {objects.map((obj) => (
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
