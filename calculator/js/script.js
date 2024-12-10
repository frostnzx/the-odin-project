function checkString(string) {
    return /^[0-9]*$/.test(string);
}

const container = document.querySelector(".container");
const display = document.querySelector("#display");

let currentDisplay = "" , prevDisplay = "" , operatorType = "=" ; 

container.addEventListener('click' , (event) => {
    let target = event.target ; 
    if(checkString(target.id) || target.id == "."){ // is a number
        if(currentDisplay == "0") currentDisplay = "" ; 
        if(currentDisplay == prevDisplay && operatorType != "=") currentDisplay = "" ; 
        if(target.id == "." && currentDisplay.indexOf('.') != -1){
            return; // currently display number can't having
            // more than one " . "
        }
        if(target.id == "0" && currentDisplay == "0"){
            return; // can't have more zero alone
        }
        currentDisplay += target.id ; 
    }
    else if(target.id == "negative") {
        let newValue = parseFloat(currentDisplay) ; 
        newValue *= -1 ; 
        currentDisplay = newValue.toString();
    }
    else if(target.id == "back") {
        currentDisplay = currentDisplay.substring(0 , currentDisplay.length - 1);
    }
    else if(target.id != "clear"){ // +,-,*,/,=
        if(operatorType == "=") { // this the first input
            if(target.id == "=") {
                return ; // on first input but use '=' nothing happend
            }
        }
        else {
            let calculatedTotal = calculate(prevDisplay , currentDisplay) ; 
            currentDisplay = calculatedTotal ; 
        }
        operatorType = target.id ; 
        prevDisplay = currentDisplay ; 
    }
    else { // clear
        currentDisplay = "0" ; 
        prevDisplay = "" ; 
        operatorType = "=" ; 
    }

    // render
    display.textContent = currentDisplay ; 
});

function calculate(prevDisplay , currentDisplay) {
    let a = parseFloat(prevDisplay);
    let b = parseFloat(currentDisplay);
    let c = 0 ;
    switch(operatorType) {
        case '+' : c = a+b ; break;
        case '-' : c = a-b ; break;
        case '*' : c = a*b ; break;
        case '/' : c = a/b ; break;
    }
    console.log("a = " , a);
    console.log("b = " , b);
    console.log("c = " , c);
    return c.toString();
}