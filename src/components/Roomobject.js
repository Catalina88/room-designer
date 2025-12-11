import React from 'react';

import BedImg from '../assets/sofa.png';
import SofaImg from '../assets/table.png';
import TableImg from '../assets/chair.png';
import ChairImg from '../assets/lamp.png';




const RoomObject = ({object, onDragStar})  => {
    let ObjectImg;//we store an empty variable to locate the path we choose
    switch (object.type) { //One of the images imported into the ObjectImage variable is chosen.
        case 'sofa':
            ObjectImg = SofaImg;
            break;
        case 'table':
            ObjectImg = TableImg;
            break;
        case 'chair':
            ObjectImg = ChairImg;
            break;
        case 'lamp':
            ObjectImg = LampImg;
            break;
        default:
            ObjectImg = SofaImg;
    }


    return(
        <img
            src={ObjectImg}
            alt={"Set Mobiliario"}
            draggable //makes the object draggable
            onDragStart={(e) => onDragStart(e, object)}
            className="w-15 h-15 m-1 object-cover"
        />

    )
}