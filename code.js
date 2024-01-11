var result = document.getElementById("result");

function display(number){
    result.value += number;
}
function calculator(){
    var final_number = result.value;
    // alert(final_number);
    var final_number = eval(final_number);
    result.value = final_number;
}
function clrs(){
    result.value ="";
}
function dele(){
    result.value = result.value.slice(0,-1);
}