export const combineNames = (firstName, lastName) => {
  return Promise.resolve({ result: `${firstName} ${lastName}` });
}

export const fetchGames = () => {
  return Promise.resolve(
    [
      {
        name: "Jumanji",
        fun: 7
      },
      {
        name: "Yahtzee",
        fun: 5
      },
      {
        name: "Monopoly",
        fun: 1
      },
      {
        name: "Dungeons & Dragons",
        fun: 10
      },
    ]
  )
}
































// export const fetchGames = () => {
//   return Promise.resolve([
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
//   ])
// }