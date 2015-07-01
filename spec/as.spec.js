requirejs(['./as'], function(as) {
  describe('misc module test suite', function() {
    it('misc.hello() は hello, world を返す。', function() {
      expect(as.test()).toBe('hello');
    });
  });
});
