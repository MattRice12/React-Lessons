describe("API calls", () => {
  it("renders", async () => {

    const combineNames = jest.fn((firstName, lastName) => Promise.resolve({ result: `${firstName} ${lastName}` }))

    combineNames("Matt", "Rice").then(response => {
      expect(response.result).toBe("Matt Rice") 
    })
  })
})