import React, { useState } from "react";
import { formOutput, Math, sortedGames } from "./helpers"
import "./Dashboard.scss";

const Dashboard = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [greeting, setGreeting] = useState("")

  const [numberInput, updateNumberInput] = useState(0);
  const [numberResult, updateNumberResult] = useState(0);

  const [games, setGames] = useState([]);

  const onSetGreeting = () => {
    formOutput(firstName, lastName).then(response => {
      setGreeting(response);
    });
  }

  const onCalculate = (type) => {
    const updatedNumber = Math.calculate(numberInput, type)
    updateNumberResult(updatedNumber);
  }

  const getSortedGames = (sort) => {
    sortedGames(sort).then(games => setGames(games));
  }

  return (
    <div className="view">
      <h1>Search Results</h1>

      <div className="container">
        <div className="content--flex">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" onChange={e => setLastName(e.target.value)} />
          </div>
          <button onClick={onSetGreeting}>Combine Names</button>
        </div>
        {greeting}
      </div>

      <div>-----------------------------------------</div>

      <div className="container">
        <label htmlFor="number">Number</label>
        <input type="number" onChange={e => updateNumberInput(e.target.value)} />
        <button onClick={() => onCalculate("double")}>Double</button>
        <button onClick={() => onCalculate("triple")}>Triple</button>
        <div>{numberResult}</div>
      </div>

      <div>-----------------------------------------</div>

      {/* 
        Build a sortable Array of Games. 2 buttons to sort
      */}

      <div className="container">
        <h2>Games</h2>
        <button onClick={() => getSortedGames("Alphabetical")}>Games (Alphabetical)</button>
        <button onClick={() => getSortedGames("Fun")}>Games (By most fun)</button>
        <ul>
          {games.map((game, i) => {
            return (
              <ol key={i}>
                {i + 1}. {game.name}
              </ol>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;