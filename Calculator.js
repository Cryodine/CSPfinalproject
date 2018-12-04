function init() {
  
  var zero = document.getElementById("zero");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");
  var seven = document.getElementById("seven");
  var eight = document.getElementById("eight");
  var nine = document.getElementById("nine");
  
  var plus = document.getElementById("plus");
  var equals = document.getElementById("equals");
  
  var screen = document.getElementById("screen");
  
  var product;
  var numtemp;
}

function add(var x,var y) {
  return(x+y);
}

function click(var x){
  numtemp += x.toString();
}

function plusbutt(){
  product = add(numtemp.toInt(),product);
  display(product);
}

display(var x){
  screen.innerHTML = x;
}
