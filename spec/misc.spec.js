'use strict';
requirejs(['./misc'], function(misc) {
  describe('misc module test suite', function() {
    it('misc.hello() は hello, world を返す。', function() {
      expect(misc.hello()).toBe('hello, world');
    });
  });
});
