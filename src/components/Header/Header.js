import "../Header/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="headerRoom">
      <div className="headerBorder">
        <div className="header-content">
          <img src="/img/logo_rm1.png" alt="Room Designer Logo" />
          <div className="title">
            <h1 className="title-planner">Room Planner</h1>
            <p className="textf">Drag furniture to design your perfect space</p>
          </div>
        </div>
        <div className="url">
          <Link to="/">Inicio</Link>
          <Link to="/#SobreNosotros">Sobre Nosotros</Link>
          <Link to="/planner">Crear</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
