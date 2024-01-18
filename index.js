function toCelcius(temp){
    return (temp - 32) * (5/9);
    }
    
    function toFahrenheit(temp){
        return temp * 9/5 + 32;
    }

document.getElementById("submitButton").onclick = function(){

let temp;

if(document.getElementById("cButton").checked){
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toCelcius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "° Celcius";
}
else if(document.getElementById("fButton").checked){
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "° Fahrenheit";
}
else{
    document.getElementById("tempLabel").innerHTML = "Please select a unit!";
}
}
