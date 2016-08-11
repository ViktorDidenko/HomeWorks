

function Pow(x,n){
  var result = x;
  if (n==0) {             
  	result = 1;
  	return result;
  }
  if (n>0){
  	for (var i = 1; i < n; i++) {
  	result = result*x;	
  	}
    return result;
  }
  if(n<0){
    for (var i = -1; i > n; i--) {
  	result = result*x;
  }
  result = 1/(result);
  return result;
  }
}

var x = prompt("x?", '');
var n = prompt("n?", '');
var out = Pow(x,n);

console.log("Out result is =", out);