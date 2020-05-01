const axios = require('axios')

export const combineNames = (firstName, lastName) => {
  // return axios
  //   .post("/transform_string", {
  //     firstName: firstName,
  //     lastName: lastName
  //   })
  
  // response: `${firstName} ${lastName}`





  return Promise.resolve({ result: `${firstName} ${lastName}` })
}

export const mattsMethod = () => {
  return Promise.resolve({})
};

export const fetchGames = () => {
  return axios
    .post("/games")
  
  // return Promise.resolve(
  //   [
  //     {
  //       name: "Jumanji",
  //       fun: 7
  //     },
  //     {
  //       name: "Yahtzee",
  //       fun: 5
  //     },
  //     {
  //       name: "Monopoly",
  //       fun: 1
  //     },
  //     {
  //       name: "Dungeons & Dragons",
  //       fun: 10
  //     },
  //   ]
  // )
}