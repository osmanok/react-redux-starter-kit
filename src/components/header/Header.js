import React from 'react';
import { Link } from 'react-router';

const Header = () =>{
  return(
    <header>
      <nav className="ml-5 navbar navbar-expand-lg navbar-primary justify-content-between">
        <Link className="navbar-brand" href='#'> Elektrik-Surec-Takip </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" activeClassName="active" className="nav-link">Anasayfa</Link>
          </li>
          <li className="nav-item">
            <Link to="/hakimizda" activeClassName="active" className="nav-link">Hakkimizda</Link>
          </li>
          <li className="nav-item">
            <Link to="/iletisim" activeClassName="active" className="nav-link">iletisim</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
