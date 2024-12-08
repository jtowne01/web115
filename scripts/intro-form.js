document.addEventListener('DOMContentLoaded', function () {
    const defaults = {
        firstName: "Jason",
        lastName: "Towne",
        personalBackground: "I am a twenty-year-old from Charlotte. I enjoy music, skateboarding, and being outside with nature.",
        academicBackground: "This is my second year at CPCC. I graduated high school in 2022 and am working towards a two-year degree in Full Stack Programming.",
        webDevBackground: "I have no background history with programming outside of coursework projects from other classes and personal projects for experience.",
        computerPlatform: "Desktop PC with Windows 11.",
        courses: "Web115 - Web Markup and Scripting: I am taking this course to further advance my knowledge and experience with front-end programming.\nWeb140 - Web Development Tools: I am taking this course to improve on building websites altogether.\nDBA120 - Database Programming I: I am taking this course to learn about databases and get familiar with SQL programming.",
        interestingFact: "I went to Mumbai, India, in late 2023 for my sister's wedding since my brother-in-law is from there, and most of his family currently still lives there. It was a great experience, and seeing the differences between an American and Indian wedding was unbelievable."
    };

    function setDefaultValues() {
        document.getElementById("first-name").value = defaults.firstName;
        document.getElementById("last-name").value = defaults.lastName;
        document.getElementById("personal-background").value = defaults.personalBackground;
        document.getElementById("academic-background").value = defaults.academicBackground;
        document.getElementById("web-dev-background").value = defaults.webDevBackground;
        document.getElementById("computer-platform").value = defaults.computerPlatform;
        document.getElementById("courses").value = defaults.courses;
        document.getElementById("interesting-fact").value = defaults.interestingFact;
    }

    const outputBox = document.getElementById("output-box");

    setDefaultValues();

    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            firstName: document.getElementById("first-name").value.trim() || defaults.firstName,
            lastName: document.getElementById("last-name").value.trim() || defaults.lastName,
            personalBackground: document.getElementById("personal-background").value.trim() || defaults.personalBackground,
            academicBackground: document.getElementById("academic-background").value.trim() || defaults.academicBackground,
            webDevBackground: document.getElementById("web-dev-background").value.trim() || defaults.webDevBackground,
            computerPlatform: document.getElementById("computer-platform").value.trim() || defaults.computerPlatform,
            courses: document.getElementById("courses").value.trim() || defaults.courses,
            interestingFact: document.getElementById("interesting-fact").value.trim() || defaults.interestingFact
        };

        if (!formData.firstName || !formData.lastName) {
            alert("First Name and Last Name are required!");
            return;
        }

        const greetingMessage = `Welcome to Jumpy Tarantula, ${formData.firstName} ${formData.lastName}!`;
        document.getElementById("greeting").innerText = greetingMessage;

        outputBox.style.cssText = "display: block; visibility: visible;";
        outputBox.innerHTML = "";

        const outputContent = document.createElement("div");
        outputContent.className = "output-content";

        const fieldsOrder = [
            { key: 'firstName', label: 'First Name' },
            { key: 'lastName', label: 'Last Name' },
            { key: 'personalBackground', label: 'Personal Background' },
            { key: 'academicBackground', label: 'Academic Background' },
            { key: 'webDevBackground', label: 'Web Dev Background' },
            { key: 'computerPlatform', label: 'Computer Platform' },
            { key: 'courses', label: 'Courses' },
            { key: 'interestingFact', label: 'Interesting Fact' }
        ];

        fieldsOrder.forEach((field) => {
            const fieldElement = document.createElement("div");
            fieldElement.className = "output-field";

            const labelElement = document.createElement("span");
            labelElement.className = "output-label";
            labelElement.textContent = `${field.label}: `;

            const valueElement = document.createElement("div");
            valueElement.className = "output-value";
            valueElement.textContent = formData[field.key];

            fieldElement.appendChild(labelElement);
            fieldElement.appendChild(valueElement);
            outputContent.appendChild(fieldElement);
        });

        outputBox.appendChild(outputContent);
    });

    document.getElementById("clear").addEventListener("click", function () {
        setDefaultValues();

        outputBox.innerHTML = "";
        outputBox.style.cssText = "display: none; visibility: hidden;";
        document.getElementById("greeting").innerText = "Welcome to Jumpy Tarantula";
    });
});