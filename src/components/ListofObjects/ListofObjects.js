import { objectsSet } from '../data';
import './ListofObjects.css';

const ListofObjects = () => {
  return (
    <div>
      {objectsSet.map(obj => (
        <div key={obj.id} className="object-item">
          <img
            src={obj.image}
            alt={obj.type}
            className="object-img"
          />
          <span>{obj.type}</span>
        </div>
      ))}
    </div>
  );
};

export default ListofObjects;

