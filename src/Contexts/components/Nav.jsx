import React from "react"
import { MyContext } from "../contexts/MyProvider"
import "./Nav.scss"

const Nav = () => {
  return(
    <MyContext.Consumer>
      {context => (
        <ul className="nav">
          <li>Home</li>
          <li>{context.state.userName}</li>
        </ul>
      )}
    </MyContext.Consumer>
  )
}

export default Nav