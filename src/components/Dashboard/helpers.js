import { combineNames, fetchGames } from "../../utils/actions"

export const formOutput = (firstName, lastName) => {
  return combineNames(firstName, lastName).then(response => {
    return response.result.toUpperCase();
  });
};

const calculate = (number, type) => {
  if (type === "double") {
    return Math.double(number)
  }
  if (type === "triple") {
    return Math.triple(number)
  }
}

const double = (num) => num * 2;
const triple = (num) => num * 3;

export const Math = {
  calculate,
  double,
  triple
}






export const sortedGames = (sort) => {
  return fetchGames().then(games => {
    return games.sort((a, b) => {
      switch (sort) {
        case "Alphabetical":
          return (a.name > b.name) ? 1 : -1;
        case "Fun":
          return (a.fun > b.fun) ? -1 : 1;
        default:
          return 1;
      }
    })
  })
}