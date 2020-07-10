"use strict";

var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators div'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the input string and add the new input to start the new opration
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// adding click handlers to number buttons
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // if first key pressed is an opearator, don't do anything
      console.log("enter a number first");
    } else {
      // else just add the operator pressed to the input
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// on click of 'equal' button
result.addEventListener("click", function() {

  // this is the string that we will be processing eg. -10+26+33-56*34/23
  var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // as we move we are alterning the original numbers and operators array
  // the final element remaining in the array will be the output

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // displaying the output

  resultDisplayed = true; // turning flag if result is displayed
});

// clearing the input on press of clear
clear.addEventListener("click", function() {
  input.innerHTML = "";
})


 function checkPalindrome() {
var revStr = "";
var str = document.getElementById("str").value;
var i = str.length;
for(var j=i; j>=0; j--) {
revStr = revStr+str.charAt(j);
}
if(str == revStr) {
alert(str+" -is Palindrome");
return true;
} else {
alert(str+" -is not a Palindrome");
return false;
}
}
function anagrams() {
        var stringA = document.getElementById("str1").value;
        var stringB = document.getElementById("str2").value;
        stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

         if(sortString(stringA) === sortString(stringB))
         {
            alert("They are anagrams");
            return true;
         }
         else
         {
            alert("They are not anagrams");
            return false;
         }
    }
 
    function sortString(string) {
        return string.split('').sort().join('');
    }

    function objects3(){

        var n = document.getElementById("no1").value;
        var o = document.getElementById("no2").value;
        if((n<0 || o<0) || (n>1000 || o>1000) || (n==="") || (o===""))
        {
            alert("Please Enter a Value BEtween 0 and 1000");
            return ;
        }
        else 
        {
            var a = n%3;
            var b = o % 3;
        }
        if((a === 0 && b === 1) || (a === 1 && b === 0) )
        {
            alert("Human survies");
            return;
        }
        else if ((a===1 && b===2) || (a === 2 && b === 1)) {
            alert("Cockroach Survives");
            return;
        }
        else if ((a===0 && b===2) || (a === 2 && b === 0))
        {
            alert("Human dies");
            return ;
        }
        else
        {
            alert("Tie");
            return;
        }

    }

    function numone() {  
        var n1;  
        var n2;  
        var result;  
        var operations;
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "1";  
  
            } else 
            {  
                documentdocument.ca.f.value = document.ca.f.value + "1";  
            }  
  
        }  
  
        function numtwo() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "2";  
  
            } else   
            {  
                documentdocument.ca.f.value = document.ca.f.value + "2";  
            }  
  
        }  
  
        function numthree() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "3";  
  
            } else    
            {  
                documentdocument.ca.f.value = document.ca.f.value + "3";  
            }  
  
        }  
  
        function numfour() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "4";  
  
            } else    
            {  
                documentdocument.ca.f.value = document.ca.f.value + "4";  
            }  
  
        }  
  
        function numfive() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "5";  
  
            } else   
            {  
                documentdocument.ca.f.value = document.ca.f.value + "5";  
            }  
  
        }  
  
        function numsix() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "6";  
  
            } else //if(document.ca.f.value != "0")    
            {  
                documentdocument.ca.f.value = document.ca.f.value + "6";  
            }  
  
        }  
  
        function numseven() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "7";  
  
            } else     
            {  
                documentdocument.ca.f.value = document.ca.f.value + "7";  
            }  
        }  
  
        function numeight() {  
  
            if (document.ca.f.value == "0") {  
  
                document.ca.f.value = "8";  
  
            } else if (document.ca.f.value == result) {  
                document.ca.f.value = "8";  
            } else     
            {  
                documentdocument.ca.f.value = document.ca.f.value + "8";  
            }  
  
        }  
  
        function numnine() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "9";  
  
            } else     
            {  
                documentdocument.ca.f.value = document.ca.f.value + "9";  
            }  
  
        }  
  
        function numzero() {  
  
            if (document.ca.f.value == "0") {  
  
                document.ca.f.value = "0";  
  
            } else if (document.ca.f.value == result) {  
                document.ca.f.value = "0";  
            } else    
            {  
                documentdocument.ca.f.value = document.ca.f.value + "0";  
            }  
  
        }  
  
        function numdobuzero() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                return;  
  
            } else  
            {  
                documentdocument.ca.f.value = document.ca.f.value + "00";  
            }  
  
        }  
  
        function clr() {  
            document.ca.f.value = "0";  
            document.ca.j.value = "";  
            return;  
        }  
  
        function plus() {  
  
            operation = "+";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
            //alert(n1);    
  
        }  
  
        function mul() {  
  
            operation = "*";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
  
        }  
  
        function minu() {  
  
            operation = "-";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
  
        }  
  
        function di() {  
  
            operation = "/";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
  
        }  
  
        function operationperc() {  
  
            operation = "%";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
  
        }  
  
        function equalsto() {  
  
            n2 = parseInt(document.ca.f.value);  
  
            if (operation == "+") {  
                result = n1 + n2;  
            } else if (operation == "*") {  
  
                result = n1 * n2;  
  
            } else if (operation == "-") {  
  
                result = n1 - n2;  
  
            } else if (operation == "/") {  
  
                result = n1 / n2;  
  
            } else if (operation == "%") {  
  
                if (document.ca.f.value == "0") {  
  
                    result = n1 / 100;  
                    document.ca.j.value = n1 + operation + "100";  
                } else if (document.ca.f.value != "0") {  
                    result = n1 / n2 * 100;  
                    document.ca.j.value = n1 + operation + n2 + "*100 = " + result;  
                }  
            } else if (operation == "^") {  
  
                for (var i = 0; i < n2; i++) {  
  
                    result = n1 * i;  
                }  
  
  
            }  
            document.ca.f.value = "";  
            document.ca.f.value = result.toString();  
            document.ca.j.value = n1 + operation + n2 + " = " + result.toString();  
            return;  
  
        }  
  
        function sqrots() {  
            n1 = document.ca.f.value;  
            result = Math.sqrt(parseInt(document.ca.f.value));  
            document.ca.f.value = result;  
            document.ca.j.value = "sqrt(" + n1 + ") = " + result;  
  
        }  
  
        function power() {  
  
            operation = "^";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
  