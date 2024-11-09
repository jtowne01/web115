function generateList(count) {
    const list = document.getElementById("fizz-buzz-list");
    list.innerHTML = ""; 
  
    for (let i = 1; i <= count; i++) {
        let listItem = document.createElement("li");
        let result = i % 2 === 0 ? "Jumpy Tarantula: The number is even" : "Jumpy Tarantula: The number is odd";
       
        listItem.innerHTML = `<span class="number">${i}.</span> ${result}`;
        list.appendChild(listItem);
    }
}

document.getElementById("name-form").addEventListener("submit", function(event) {
    const outputBox = document.getElementById("fizzbuzz-output-box");
    event.preventDefault();
    
    let firstName = document.getElementById("first-name").value.trim();
    let middleInitial = document.getElementById("middle-initial").value.trim();
    let lastName = document.getElementById("last-name").value.trim();

    if (!firstName || !lastName) {
        alert("First Name and Last Name are required!");
        return;
    }
    
    let greetingMessage = `Hello, ${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}!`;
    document.getElementById("greeting").innerText = greetingMessage;

    let countTo = prompt(`${firstName}, how high do you want to count?`);
    
    countTo = parseInt(countTo);
    if (isNaN(countTo) || countTo <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    outputBox.style.display = "block";
    outputBox.innerHTML = "";
        
    const fizzBuzzList = document.createElement("ul");
    fizzBuzzList.id = "fizz-buzz-list";
    outputBox.appendChild(fizzBuzzList);

    generateList(countTo);
});

document.getElementById("clear").addEventListener("click", function() {
    const outputBox = document.getElementById("fizzbuzz-output-box");
    outputBox.innerHTML = ""; 
});