var assert = require("assert")
require("../geohash_to_rgb");

var geohash = 'xn1rc';

try {
    assert.strictEqual('rgb(191,85,7,1)', geohash.geohashToRGB());
    assert.strictEqual('rgb(191,85,7,1)', geohash.geohashToAttack25());
    console.log('ok');
  } catch (err) {
    console.log(err);
  }



