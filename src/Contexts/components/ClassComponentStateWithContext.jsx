import React, { Component } from 'react';
import { MyContext } from "../contexts/MyProvider"

// Don't use hooks in classes
class ClassComponentState extends Component {
  render() {
    return(
      <MyContext.Consumer>
        {context => (
          <>
            <p>Hello, {context.state.userName}!</p>
            <button onClick={() => context.updateName("Drake Fish")}>Use Drake's Name</button>
          </>
        )}
      </MyContext.Consumer>
    )
  }
}

export default ClassComponentState;