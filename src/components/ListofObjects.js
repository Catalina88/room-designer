import React from 'react';
import Roomobject from './Roomobject'; // Import the RoomObject component

const ObjectsSet = [
    {id: 1, name:"Bed"},
    {id: 2, name:"Chair"},
    {id: 3, name:"Sofa"},
    {id: 4, name:"Table"}
];

const FurnitureList = ({ onDragStart }) => {
  return (
    <div className="flex flex-col">
      {ObjectsSet.map((object) => (
        <ObjectsSet
          key={object.id}
          object={object}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
};


export default ListofObject;