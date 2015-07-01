var ajax = require("../js/ajax");

describe('1から始まる整数を変換する', function() {
  it("3の倍数のときはFizzを返す", function() {
    expect(ajax.ajaxTest()).toEqual("hello");
  });
});
