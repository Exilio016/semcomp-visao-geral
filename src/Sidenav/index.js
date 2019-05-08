import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './style.css'

export default class Sidenav extends Component {

  render() {
    return (
      <aside>
        <ul class="side-nav fixed hide-on-med-and-down">
          <li class="active "><a href="#"><i class="material-icons md-36 md-dark">home</i> Visão geral</a></li>
        </ul>
      </aside>
    );
  }
}
