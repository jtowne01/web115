document.addEventListener('DOMContentLoaded', function() {
    const defaults = {
        firstName: "Casey",
        lastName: "Webs",
        firstDivisor: 5,
        secondDivisor: 7,
        thirdDivisor: 11,
        firstWord: "Jumpy",
        secondWord: "Tarantula",
        thirdWord: "Venomous",
        countTo: 125,
        firstCombination: "Arachnids",
        secondCombination: "Eight-eyed",
        thirdCombination: "Robust",
        fourthCombination: "Ground-Dwelling"
    };

    function setDefaultValues() {
        document.getElementById("first-name").value = defaults.firstName;
        document.getElementById("last-name").value = defaults.lastName;
        document.getElementById("divisor-1").value = defaults.firstDivisor;
        document.getElementById("divisor-2").value = defaults.secondDivisor;
        document.getElementById("divisor-3").value = defaults.thirdDivisor;
        document.getElementById("first-word").value = defaults.firstWord;
        document.getElementById("second-word").value = defaults.secondWord;
        document.getElementById("third-word").value = defaults.thirdWord;
        document.getElementById("total-count").value = defaults.countTo;
    }

    const outputBox = document.getElementById("fizzbuzz-output-box-4");

    setDefaultValues();

    document.getElementById("name-form-4").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            firstName: document.getElementById("first-name").value.trim(),
            middleInitial: document.getElementById("middle-initial").value.trim(),
            lastName: document.getElementById("last-name").value.trim(),
            firstDivisor: parseInt(document.getElementById("divisor-1").value) || defaults.firstDivisor,
            secondDivisor: parseInt(document.getElementById("divisor-2").value) || defaults.secondDivisor,
            thirdDivisor: parseInt(document.getElementById("divisor-3").value) || defaults.thirdDivisor,
            firstWord: document.getElementById("first-word").value.trim() || defaults.firstWord,
            secondWord: document.getElementById("second-word").value.trim() || defaults.secondWord,
            thirdWord: document.getElementById("third-word").value.trim() || defaults.thirdWord,
            countTo: parseInt(document.getElementById("total-count").value) || defaults.countTo,
            firstCombination: defaults.firstCombination,
            secondCombination: defaults.secondCombination,
            thirdCombination: defaults.thirdCombination,
            fourthCombination: defaults.fourthCombination
        };

        if (!formData.firstName || !formData.lastName) {
            alert("First Name and Last Name are required!");
            return;
        }

        const greetingMessage = `Welcome to Jumpy Tarantula, ${formData.firstName} ${formData.middleInitial ? formData.middleInitial + "." : ""} ${formData.lastName}!`;
        document.getElementById("greeting").innerText = greetingMessage;

        outputBox.style.cssText = "display: block !important; visibility: visible !important;";
        outputBox.innerHTML = "";

        const fizzBuzzList = document.createElement("ul");
        fizzBuzzList.id = "fizz-buzz-list";
        outputBox.appendChild(fizzBuzzList); 

        for (let i = 1; i <= formData.countTo; i++) {
            let result = `${i}.`;
            if (i % formData.firstDivisor === 0 && i % formData.secondDivisor === 0 && i % formData.thirdDivisor === 0) {
                result += " " + formData.fourthCombination;
            } else if (i % formData.firstDivisor === 0 && i % formData.thirdDivisor === 0) {
                result += " " + formData.secondCombination;
            } else if (i % formData.secondDivisor === 0 && i % formData.thirdDivisor === 0) {
                result += " " + formData.thirdCombination;
            } else if (i % formData.firstDivisor === 0 && i % formData.secondDivisor === 0) {
                result += " " + formData.firstCombination; 
            }  else {
                if (i % formData.firstDivisor === 0) result += " " + formData.firstWord;
                if (i % formData.secondDivisor === 0) result += " " + formData.secondWord;
                if (i % formData.thirdDivisor === 0) result += " " + formData.thirdWord;
            }
        
            const listItem = document.createElement("li");
            listItem.textContent = result;
            fizzBuzzList.appendChild(listItem);
        }
    });

    document.getElementById("clear").addEventListener("click", function() {
        outputBox.innerHTML = ""; 
    });
});
