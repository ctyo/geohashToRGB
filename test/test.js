var assert = require("assert")
require("../geohash_to_rgb");

var geohash = 'xn1rc';

try {
    assert.strictEqual('rgb(191,85,7,1)', geohash.geohashToRGB());
    assert.strictEqual('rgba(255,179,180,1)', geohash.geohashToAttack25());
    // 透過
    assert.strictEqual('rgb(191,85,7,0.5)', geohash.geohashToRGB(0.5));
    assert.strictEqual('rgba(255,179,180,0.5)', geohash.geohashToAttack25(0.5));

    console.log('ok');
  } catch (err) {
    console.log(err);
  }



