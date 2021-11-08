import { questionsPerPage, setsOfQuestions } from ".";

describe("questionsPerPage", () => {
  it("should be a whole number", () => {
    expect(questionsPerPage % 1).toBe(0);
  });
});

describe("setsOfQuestions", () => {
  it("should be a whole number", () => {
    expect(setsOfQuestions % 1).toBe(0);
  });
});
