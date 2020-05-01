import { formOutput, Math, sortedGames } from "./helpers";
import * as actions from "../../utils/actions";
jest.mock("../../utils/actions")

describe("async functions", () => {
  test("test formOutput", async () => {
    return formOutput("Matt", "Rice").then(response => {
      expect(response).toBe("MATT RICE");
    });
  });
  
  test("spyOn combineNames", () => {
    const spyCombineNames = jest.spyOn(actions, "combineNames");
    formOutput("Matt", "Rice");
    expect(spyCombineNames).toHaveBeenCalled();
  });
});

describe("normal functions", () => {
  test("spyOn double", () => {
    const doubleSpy = jest.spyOn(Math, "double");
    let num = 2
    num = Math.calculate(num, "double");
    num = Math.calculate(num, "double");
    Math.calculate(num, "double");
    expect(doubleSpy).toHaveBeenCalled();
    expect(doubleSpy).toHaveBeenCalledWith(2);
    expect(doubleSpy).toHaveBeenCalledWith(4);
    expect(doubleSpy).toHaveBeenCalledWith(8);
    expect(doubleSpy).toHaveBeenCalledTimes(3);

    expect(num).toBe(8)
  })
})

describe("sorted games", () => {
  test("fun level", async () =>{
    return sortedGames("Fun").then(response => {
      expect(response).toHaveLength(4);
      expect(response[0].name).toBe("Dungeons & Dragons")
    })
  })

  test("spy on function", () => {
    const gamesSpy = jest.spyOn(actions, "fetchGames");
    sortedGames("Alphabetical");
    expect(gamesSpy).toHaveBeenCalled();
  })
})