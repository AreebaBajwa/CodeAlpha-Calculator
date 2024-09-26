const display = document.getElementById("Display");

function Calculator_value(input){
    display.value += input;

}

function Clear_display(){
    display.value ="";

}
function Calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
