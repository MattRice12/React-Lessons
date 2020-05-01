import React, { useState } from 'react';

// Use hook in functional components

const FunctionalComponentHooks = ({ defaultName }) => {
  const [userName, setName] = useState(defaultName);
  const [fruitList, setFruitList] = useState([]);

  const updateNameToMatt = () => {
    setName("Matt")
  }

  const addFruitToList = (fruit) => {
    const newFruitList = fruitList.concat([fruit])
    setFruitList(newFruitList)
  }

  return(
    <div>
      <p>Hello, {userName}!</p>
      <button onClick={updateNameToMatt}>Use Matt's Name</button>
      <button onClick={() => addFruitToList("apples")}>Add Apples</button>
      <button onClick={() => addFruitToList("bananas")}>Add Bananas</button>
      <ul>
        {fruitList.map((fruit, i) => <li key={i}>{fruit}</li>)}
      </ul>
    </div>
  )
}

export default FunctionalComponentHooks;