import { NavLink, useNavigate } from "react-router-dom";
import "../sass/Header.scss";
import { useState } from "react";

export const Header = () => {
  const navegator = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navegator(`/search?q=${queryTerm}`);
  };
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <i className="bi bi-film"></i> MovieHunt
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/top" className="nav-link">
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/popular" className="nav-link">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/upcoming" className="nav-link">
                Upcoming
              </NavLink>
            </li>
          </ul>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              className="form-control"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
