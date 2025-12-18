
import { objectsSet } from './data';

const ListofObjects = () => {
  return (
    <div>
      {objectsSet.map(obj => (
        <div key={obj.id}>{obj.type}</div>
      ))}
    </div>
  );
};

export default ListofObjects;
