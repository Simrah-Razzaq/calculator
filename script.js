var input=document.getElementById("result");
function result(userValue){
    input.value+=userValue;
}
function clearVal(){
    input.value ="";
}
function delCal() {
    input.value = input.value.slice(0, -1);
  }
  function displayResult() {
    if (input.value !== "undefine") {
        var result = eval (input.value);
       input.value = result;
    }
}
function perc(){
    input.value = (input.value*100)+"%"
}