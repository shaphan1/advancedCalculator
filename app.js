const keys = Array.from(document.querySelectorAll("#keys button"));
const numbers = Array.from(document.querySelectorAll("#num"));
const operators = Array.from(document.querySelectorAll("#opr"));
const point = document.querySelector("#pnt");
const equal = document.querySelector("#eql");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const output = document.querySelector("#output");
const temp = document.querySelector("#temp");
const pm = document.querySelector("#pm");

let lastInput = "";
let lastNumber = "";
let operation = ""
let hasdecimal = false;
let operator = "";
let tempnum;


keys.forEach(key => {
    key.addEventListener('click', function () {
    });
});

numbers.forEach(number => {
    number.addEventListener('click', function () {

        if (lastInput == "num" || lastInput == ".") {
            output.textContent = output.textContent + number.textContent;
        }
        if (lastInput == "" || lastInput == "opr") {
            output.textContent = number.textContent;
        }
        solve(operator);
        lastInput = "num";
    });
});

operators.forEach(opr => {
    opr.addEventListener('click', function () {
        if ((lastInput == "num")) {
            lastNumber = tempnum;

            temp.textContent = lastNumber + " " + opr.textContent;
            lastInput = "opr";
            hasdecimal = false;
            operator = opr.textContent;
        }
    });
});

point.addEventListener('click', function () {
    if ((lastInput == "num") && (hasdecimal == false)) {

        output.textContent = output.textContent + ".";
        lastNumber
        hasdecimal = true;
        lastInput = "."
    }
});

equal.addEventListener('click', function () {
    if (lastInput == "num") {
        output.textContent = tempnum;
        temp.textContent = "";

        hasdecimal = false;
    }
});

pm.addEventListener('click', function () {
    let y = parseFloat(output.textContent);
    if (lastInput == "num") {
        if (y > 0) {
            output.textContent = '-' + output.textContent;
            solve(operator);
        }
        if (y < 0) {
            y = Math.abs(y);
            output.textContent = output.textContent.replace('-', "");
            solve(operator);

        }
    }
}
)

clear.addEventListener('click', function () {
    temp.textContent = "";
    output.textContent = "";

    lastInput = "";
    lastNumber = "";
    operation = ""
    hasdecimal = false;
    operator = "";
    tempnum = null;
});

backspace.addEventListener('click', function () {
    let last = output.textContent.slice(-2);
    let length = output.textContent.length;

    if (length >= 2) {
        if (last < 0) {
            output.textContent = "";
        }
        else {

            output.textContent = output.textContent.slice(0, -1);
        }
    }
    else {
        output.textContent = "";
        lastInput = "";
        lastNumber = "";
        operation = ""
        hasdecimal = false;
        operator = "";
        tempnum = null;
    }

    tempnum = parseFloat(output.textContent);

});

function solve(operator) {

    if (!(operator == "")) {

        tempnum = parseFloat(output.textContent);

        switch (operator) {
            case "+":
                tempnum = lastNumber + tempnum;
                break;

            case "-":
                tempnum = lastNumber - tempnum;
                break;

            case "÷":
                tempnum = lastNumber / tempnum;
                break;

            case "x":
                tempnum = lastNumber * tempnum;
                break;

            default:
                break;
        }
    }
    else {
        tempnum = parseInt(output.textContent);
    }
}

