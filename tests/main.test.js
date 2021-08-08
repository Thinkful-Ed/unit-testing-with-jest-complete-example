const findHighestScoringStudent = require("../src/main");

describe("findHighestScoringStudent", () => {
  it("should return the student with the highest score", () => {
    const mathStudents = [
      { name: "Shane Carey", score: 9.5 },
      { name: "Catarina Lima", score: 9.7 },
      { name: "Rebecca Mills", score: 8.7 },
    ];

    const expected = { name: "Catarina Lima", score: 9.7 };
    const actual = findHighestScoringStudent(mathStudents);

    expect(actual).toEqual(expected);
  });
});
