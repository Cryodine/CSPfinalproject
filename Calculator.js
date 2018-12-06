  
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
var firstnum = 0;
var lastop = "null";

function add(x,y) {
  return(x+y);
}
function mul(x,y) {
  return(x*y);
}

function butt(x){
  numtemp += x.toString();
  display(numtemp);
}

function plusbutt(){
  firstnum = parseInt(numtemp,10)
  numtemp = "";
  lastop = "add";
}

function mulbutt(){
  firstnum = parseInt(numtemp,10)
  numtemp = "";
  lastop = "mul";
}

function eqlbutt(){
  if(lastop == "add"){
     product = add(numtemp,onscreen());
     }else if(lastop == "mul"){
     product = mul(pnumtemp,onscreen());
     }
  display(product);
  product = 0;
}

function cebutt(){
  display(0);
  product = 0;
  numtemp = "";
  lastop = "null";
}

function display(x){
  screen().innerHTML = x;
}

function onscreen(){
  return(parseInt(screen().innerHTML,10));
}
