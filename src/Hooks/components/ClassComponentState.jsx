import React, { Component } from 'react';

// Don't use hooks in classes
class ClassComponentState extends Component {
  state = {
    userName: this.props.defaultName
  }

  useMattsName = () => {
    this.setState({
      userName: "Matt"
    })
  }

  render() {
    return(
      <div>
        <p>Hello, {this.state.userName}!</p>
        <button onClick={this.useMattsName}>Use Matt's Name</button>
      </div>
    )
  }
}

export default ClassComponentState;