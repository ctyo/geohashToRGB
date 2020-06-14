var assert = require("assert")
var geohashToRGB = require("../index")

var geohash = 'xn1rc';

try {
  assert.strictEqual('rgb(191,85,7,1)', geohashToRGB.geohashToRGB(geohash));
  assert.strictEqual('rgba(255,179,180,1)', geohashToRGB.geohashToAttack25(geohash));
  // 透過
  assert.strictEqual('rgb(191,85,7,0.5)', geohashToRGB.geohashToRGB(geohash, 0.5));
  assert.strictEqual('rgba(255,179,180,0.5)', geohashToRGB.geohashToAttack25(geohash, 0.5));

  console.log('ok');
} catch (err) {
  console.log(err);
}



