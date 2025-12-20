import "../Header/Header.css";
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
          <a href="/" >
            Inicio
          </a>
          <a href="/" >
            Sobre Nosotros
          </a>
          <a href="/planner" >
            Crear
          </a>
        </div>
      </div>
    </header>
  );
};




export default Header;
