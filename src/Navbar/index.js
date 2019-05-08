import React, { Component } from 'react';
import logo from '../images/logo-semcomp-branco.svg';

import 'materialize-css/dist/css/materialize.min.css';
import './style.css';


export default class Navbar extends Component {
  render() {
    return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"><img src={logo} alt="Semcomp 20"/></a>
          <ul className="right hide-on-med-and-down">
            <li><a>Área de Usuário</a></li>
          </ul>
        </div>
      </nav>
    </div>
    );
  }
}
