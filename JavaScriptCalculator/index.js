var box = document.getElementById('display');

function addtoscreen(x){
  box.value+=x;
  if(x==='c'){
    box.value='';
  }
}

function answer(){
  x=box.value
  x=eval(x);
  box.value=x;
}

function power(){
  x=box.value;
  x=eval(x*x);
  box.value=x;
}

//Code Taken From Stack Overflow
function backspace(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  box.value  = newNum;
}
