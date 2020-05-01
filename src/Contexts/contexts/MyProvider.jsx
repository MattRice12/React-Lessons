import React, { Component } from 'react';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    userName: "Matt Rice"
  }

  updateName = (newName) => {
    this.setState({ 
      userName: newName
    })
  }
  
  render() {
    return(
      <MyContext.Provider value={{ 
        state: this.state,
        updateName: this.updateName
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}