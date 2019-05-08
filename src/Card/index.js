import React, { Component } from 'react';

// import { Container } from './styles';

export default class Card extends Component {
  Description = this.props.description;

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content ">
            <span className="card-title">{this.props.title}</span>
              {this.props.children}
          </div>
          { this.props.action &&
          <div className="card-action">
            <i className="material-icons md-36 md-dark">{this.props.icon}</i>
            <a href={this.props.link}>{this.props.action}</a>
          </div>
          }
        </div>
      </div>
    );
  }
}
