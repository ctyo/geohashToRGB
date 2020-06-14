# gethashToRGB
ジオハッシュ文字列をよろしくな色にします。

[![npm version](https://badge.fury.io/js/geohashtorgb.svg)](https://badge.fury.io/js/geohashtorgb)

usage
```
var geohashToRGB = require("../index")

var geohash = 'xn1rc';

# 適当な色
geohashToRGB.geohashToRGB(geohash)
# アタック25な色(透過)
geohashToRGB.geohashToAttack25(geohash, 0.5)

```

適当な色

![sample1](https://user-images.githubusercontent.com/1971086/46902639-949d7a00-cf03-11e8-8056-37159b84e9c1.png)


アタック25風

![sample2](https://user-images.githubusercontent.com/1971086/46902625-5dc76400-cf03-11e8-9495-310ec6c8b0dd.png)
