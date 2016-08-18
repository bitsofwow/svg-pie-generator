var tap = require('tap');
var cornerArc = require('../lib/');

var EPSYLON = 3;

function prec (n) {
  return isFinite(n) ? parseFloat(parseFloat(n).toFixed()) : n;
}


tap.test('r 100 0-45 50 10', function(t) {
  t.deepEquals(cornerArc([0, 0], 100, 0, 45, 50, 10, true)
    .map(prec),
    ["M",0,-90,"A",10,10,0,0,1,10,-100,"A",100,100,0,0,1,63,-77,"A",10,10,0,0,1,64,-64,"L",42,-42,"A",10,10,0,0,1,28,-42,"A",50,50,0,0,0,10,-49,"A",10,10,0,0,1,0,-60,"Z"]);

  t.end();
});

tap.test('r 100 0-5 50 10', function(t) {
  t.deepEquals(cornerArc([0, 0], 100, 0, 5, 50, 10, true)
    .map(prec),
  	["M",0,-98,"A",2,2,0,0,1,2,-100,"A",100,100,0,0,1,7,-100,"A",2,2,0,0,1,9,-97,"L",5,-52,"A",2,2,0,0,1,2,-50,"A",50,50,0,0,0,2,-50,"A",2,2,0,0,1,0,-52,"Z"]);

	t.end();
});

tap.test('r 100 0-360 50 10', function(t) {
  t.deepEquals(cornerArc([0, 0], 100, 0, 360, 50, 10, true)
    .map(prec),
    ["M",-100,0,"A",100,100,0,1,0,100,0,"A",100,100,0,1,0,-100,0,"M",-50,0,"A",50,50,0,1,0,50,0,"A",50,50,0,1,0,-50,0,"Z"]);

  t.end();
});

tap.test('r 100 0-90 50 0', function(t) {
  t.deepEquals(cornerArc([0, 0], 100, 0, 90, 50, 0, true).map(prec),
    ["M",0,-100,"A",0,0,0,0,1,0,-100,"A",100,100,0,0,1,100,0,"A",0,0,0,0,1,100,0,"L",50,0,"A",0,0,0,0,1,50,0,"A",50,50,0,0,0,0,-50,"A",0,0,0,0,1,0,-50,"Z"]);

  t.end();
});

tap.test('r 100 0-5 50 0 return points', function(t) {
  t.deepEquals(cornerArc([0, 0], 100, 0, 5, 50, 10, true).map(prec),
  	["M", 5.989645753117198e-15, -97.81833843500709, "A", 2.1816615649929116, 2.1816615649929116, 0, 0, 1, 2.181488503456116, -99.97620270799091, "A", 100, 100, 0, 0, 1, 6.540312923014305, -99.78589232386035, "A", 2.1816615649929116, 2.1816615649929116, 0, 0, 1, 8.52542994064484, -97.44611012509807, "L", 4.547931471503882, -51.98309458866376, "A", 2.1816615649929116, 2.1816615649929116, 0, 0, 1, 2.1809693682668003, -49.95241107909289, "A", 50, 50, 0, 0, 0, 2.1809693682668003, -49.95241107909289, "A", 2.1816615649929116, 2.1816615649929116, 0, 0, 1, 3.195205240487952e-15, -52.181661564992915, "Z"].map(prec)
  );

  t.end();
});
