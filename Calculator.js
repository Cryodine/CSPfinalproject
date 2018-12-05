  
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
  
  var product = 0;
  var numtemp = 0;

function add(x,y) {
  return(x+y);
}

function click( x){
  numtemp += x.toString();
}

function plusbutt(){
  product = add(parseInt(numtemp,10),product);
  display(product);
  console.log(product);
}

function display(x){
  screen.innerHTML = x;
}
