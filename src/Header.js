import React from "react";
// import ReactDOM from 'react-dom/client';
// import { StrictMode } from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      header: "This is a header",
      subHeader: "this is a sub header",
    };
  }

  changeTitle = () => {
    this.setState({
      header: "Change Header",
    });
  };
  render() {
    return (
      <div>
        <h1> {this.state.header}</h1>
        <h2> {this.state.subHeader}</h2>
        <button onClick={this.changeTitle}>Change Header</button>
      </div>
    );
  };
}


export default Header;
