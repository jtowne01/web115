document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value.trim();
    let middleInitial = document.getElementById("middle-initial").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    const outputBox = document.getElementById("fizzbuzz-output-box");
 
    if (!firstName || !lastName) {
        alert("First Name and Last Name are required!");
        return;
    }

    let greetingMessage = `Welcome to Jumpy Tarantula, ${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}!`;
    document.getElementById("greeting").innerText = greetingMessage;


    function generateFizzBuzz() {
        outputBox.style.display = "block";
        
        outputBox.innerHTML = "";
        
        const fizzBuzzList = document.createElement("ul");
        fizzBuzzList.id = "fizz-buzz-list";
    
    for (let i = 1; i <= 125; i++) {
        let listItem = document.createElement("li");
        let result = " Jumpy Tarantulas";

        if (result === "") result = i;

       
        listItem.innerHTML = `<span class="fizzbuzz-number">${i}.</span>${result}`;
        fizzBuzzList.appendChild(listItem);
    }
    

    outputBox.appendChild(fizzBuzzList);
}

generateFizzBuzz();
});

document.getElementById("clear").addEventListener("click", function() {
    const outputBox = document.getElementById("fizzbuzz-output-box");
    outputBox.innerHTML = ""; // Clears all list items without removing the button itself
});