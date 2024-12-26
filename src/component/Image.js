import React from "react";

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "bleachImage.png"
    };
  }

  changeImage = () => {
    this.setState({
      image: "rimuru.jpg" 
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.image} className="App-logo" alt="bleach" />
        <br/>
        <button onClick={this.changeImage}>Change Image</button>
      </div>
    );
  }
}

export default Image;
