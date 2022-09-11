 function add() {
        let firstNumber = document.getElementById("first").value;
        let secondNumber = document.getElementById("second").value;
        let result;
        result = parseInt(firstNumber) + parseInt(secondNumber);
     document.getElementById("result").innerHTML = result;
    }

    function sub() {
        let firstNumber = document.getElementById("first").value;
        let secondNumber = document.getElementById("second").value;
        let result;
        result = parseInt(firstNumber) - parseInt(secondNumber);
        document.getElementById("result").innerHTML = result;
    }

    function mult() {
        let firstNumber = document.getElementById("first").value;
        let secondNumber = document.getElementById("second").value;
        let result;
        result = parseInt(firstNumber) * parseInt(secondNumber);
        document.getElementById("result").innerHTML = result;

    }

    function div() {
        let firstNumber = document.getElementById("first").value;
        let secondNumber = document.getElementById("second").value;
        let result;
        result = parseInt(firstNumber) / parseInt(secondNumber);
        document.getElementById("result").innerHTML = result;

    }
