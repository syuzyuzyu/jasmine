var addition = function(number1, number2){
        return number1 + number2;
}

describe("足し算の確認", function() {
  beforeEach(function() {
    // テスト前処理
  });

  afterEach(function() {
    // テスト後処理
  });

  it("足し算が正しい", function() {
    expect(addition(1, 2)).toEqual(3);
  });
});

describe('同じである（toEqual、toBe）', function() {
  it("同じであることの確認：toEqual", function() {
    expect(addition(1, 2)).toEqual(3);
    expect(addition(1, 2)).not.toEqual(4);
  });
  it("同じであることの確認：toBe", function() {
    var testToBe1 = "test";
    var testToBe2 = testToBe1;
    var testToBe3 = "1";
    expect(testToBe2).toBe(testToBe1);
    expect(testToBe3).not.toBe(1);
  });
});

describe('アサーションメソッド', function() {
  it("toMatch", function() {
    expect("13:45").toMatch(/^[0-9][0-9]:[0-9][0-9]$/);
    expect("2014/02/25").not.toMatch(/^[0-9][0-9]:[0-9][0-9]$/);
  });
});
