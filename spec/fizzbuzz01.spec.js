var fizzbuzz = require("./js/fizzbuzz-node01").fizzbuzz;

describe('1から始まる整数を変換する', function() {
  it("3の倍数のときはFizzを返す", function() {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it("5の倍数のときはBuzzを返す", function() {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
});
