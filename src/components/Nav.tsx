import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="/SavedCandidates"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          Potential Candidates
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
