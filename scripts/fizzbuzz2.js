function generateList(count) {
    const list = document.getElementById("fizz-buzz-list");
    list.innerHTML = ""; 
    function checkDivision(number, divisor) {
        return number % divisor === 0;
    }
    
    for (let i = 1; i <= count; i++) {
        let listItem = document.createElement("li");
        let result = "";

        if (checkDivision(i, 5) && checkDivision(i, 8)) {
            result = " Divisible by both 5 and 8.";
        } else if (checkDivision(i, 5)) {
            result = " Divisible by 5";
        } else if (checkDivision(i, 8)) {
            result = " Divisible by 8";
        } else {
            result = " Not Divisible by 5 or 8";
        }

        listItem.innerHTML = `<span class="number">${i}.</span> ${result}`;
        list.appendChild(listItem);
    }
}

function generateFizzBuzz(count) {
    const outputBox = document.getElementById("fizzbuzz-output-box");
    outputBox.style.display = "block";
    
    outputBox.innerHTML = "";
    
    const fizzBuzzList = document.createElement("ul");
    fizzBuzzList.id = "fizz-buzz-list";
    outputBox.appendChild(fizzBuzzList);

    generateList(count);
}

document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name").value.trim();
    let middleInitial = document.getElementById("middle-initial").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
 
    if (!firstName || !lastName) {
        alert("First Name and Last Name are required!");
        return;
    }
    let greetingMessage = `Welcome to Jumpy Tarantula, ${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}!`;
    document.getElementById("greeting").innerText = greetingMessage;

    let countTo = 140;
    generateFizzBuzz(countTo); 
});

document.getElementById("clear").addEventListener("click", function() {
    const outputBox = document.getElementById("fizzbuzz-output-box");
    outputBox.innerHTML = ""; 
});