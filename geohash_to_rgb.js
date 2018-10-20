String.prototype.geohashToRGB = function (alpha) {
    let numberToRGBNumber = function (num) {
        return (255 >= num) ? num : parseInt(num%255);
    }
    let toRGBNumber = function (char) {
         let materials = '0123456789abcdefghijklmnopqrstuvwxyz';
         let rgbunit = 255 / materials.length;
         return numberToRGBNumber(parseInt(materials.indexOf(char)*rgbunit) || 0);
    }
    var rgb = [0,0,0];
    alpha = alpha || 1;
    for (var i=0; i<this.length; i++) {
        rgb[i%3] = toRGBNumber(this[i]);
    }
    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + alpha + ')';
}


String.prototype.geohashToAttack25 = function (alpha) {
    if (!alpha) {
        alpha = 1;
    }
    let attacks = [
        'rgba(255,179,180,'+alpha+')',
        'rgba(144,197,255,'+alpha+')',
        'rgba(255,255,255,'+alpha+')',
        'rgba(181,227,154,'+alpha+')'
    ];
    let materials = '0123456789abcdefghijklmnopqrstuvwxyz';

    var j = 0;
    for (var i=0; i<this.length; i++) {
        j += materials.indexOf(this[i])
    }
    return attacks[j%attacks.length];
}
