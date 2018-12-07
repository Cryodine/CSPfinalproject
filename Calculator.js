  
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
var onscreen = "";
var lastop = "null";

function add(x,y) {
  return(x+y);
}
function mul(x,y) {
  return(x*y);
}
function div(x,y) {
  return(x/y);
}
function subtract(x,y) {
  return(x-y);
}

function butt(x){
  numtemp += x.toString();
  display(numtemp);
  onscreen = numtemp;
}

function plusbutt(){
  firstnum = parseInt(numtemp,10);
  numtemp = "";
  lastop = "add";
}

function mulbutt(){
  firstnum = parseInt(numtemp,10);
  numtemp = "";
  lastop = "mul";
}
function minbutt(){
  firstnum = parseInt(numtemp,10);
  numtemp = "";
  lastop = "min";
}
function divbutt(){
  firstnum = parseInt(numtemp,10);
  numtemp = "";
  lastop = "div";
}
function eqlbutt(){
  if(lastop == "add"){
     product = add(firstnum,parseInt(onscreen,10));
     }else if(lastop == "mul"){
     product = mul(firstnum,parseInt(onscreen,10));
     }else if(lastop == "min"){
     product = subtract(firstnum,parseInt(onscreen,10));
     }else if(lastop == "div"){
     product = div(firstnum,parseInt(onscreen,10));
     }
  display(product);
  product = 0;
  lastop = "null";
  firstnum = 0;
}

function cebutt(){
  display(0);
  product = 0;
  numtemp = "";
  lastop = "null";
  firstnum = 0;
}

function display(x){
  screen().innerHTML = x;
}

