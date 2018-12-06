  
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
  function screen(){
    return(document.getElementById("screen"));
  }
  
  var product = 0;
  var numtemp = "";
var lastop = "null";

function add(x,y) {
  return(x+y);
}

function butt(x){
  numtemp += x.toString();
  display(numtemp);
}

function plusbutt(){
  product = add(parseInt(numtemp,10),product);
  numtemp = "";
  display(product);
  lastop = "add";
}

function eqlbutt(){
  if(lastop == "add"){
     product = add(parseInt(numtemp,10),product);
     numtemp = "";
     display(product);
     lastop = "null";
     }else if(lastop == "null"){
     }
  product = 0;
}

function display(x){
  screen().innerHTML = x;
}
