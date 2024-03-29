var requirejs = require("requirejs");

requirejs.config({
  // node のモジュールはそのまま
  nodeRequire: require,
  // spec 実行時に __dirname が spec のパスにかわるため
  // ちゃんとやるなら require('path') で絶対パス求めたほうがいいかも
  baseUrl: __dirname + '/../js'
});
