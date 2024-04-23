function generateName() {
    var firstName = document.getElementById("firstName").value.trim().toUpperCase();
    var lastName = document.getElementById("lastName").value.trim().toUpperCase();

    if (firstName.length < 2 || lastName.length < 2) {
        alert("Please enter at least 2 characters for both first name and last name.");
        return;
    }

    var nameOptions = [
        firstName.slice(0, 2) + lastName.slice(0, 2),
        lastName.slice(0, 2) + firstName.slice(0, 2),
        firstName.slice(-2) + lastName.slice(-2),
        lastName.slice(-2) + firstName.slice(-2)
    ];

    // Add reversed versions of each name
    var reversedNames = nameOptions.map(function(name) {
        return name.split("").reverse().join("");
    });

    // Combine original names, reversed names, and their reverse
    var allNames = nameOptions.concat(reversedNames);
    var reversedAllNames = allNames.map(function(name) {
        return name.split("").reverse().join("");
    });

    // Combine original names and reversed names
    allNames = allNames.concat(reversedAllNames);

    // Clear previous results
    var companyNameElement = document.getElementById("companyName");
    companyNameElement.innerHTML = "";

    // Display all unique names
    allNames.forEach(function(name) {
        var element = document.createElement("p");
        element.textContent = name;
        companyNameElement.appendChild(element);
    });

    // Show the "Not Satisfied" button
    document.getElementById("notSatisfiedBtn").style.display = "block";
}

function notSatisfied() {
    var numFirstLetters = parseInt(prompt("Enter number of letters in first name (default is 2):")) || 2;
    var numLastLetters = parseInt(prompt("Enter number of letters in last name (default is 2):")) || 2;

    if (numFirstLetters < 1 || numLastLetters < 1) {
        alert("Invalid input. Number of letters must be greater than 0.");
        return;
    }

    var firstName = document.getElementById("firstName").value.trim().toUpperCase();
    var lastName = document.getElementById("lastName").value.trim().toUpperCase();

    if (firstName.length < numFirstLetters || lastName.length < numLastLetters) {
        alert("Input length does not match the specified number of letters.");
        return;
    }

    var nameOptions = [
        firstName.slice(0, numFirstLetters) + lastName.slice(0, numLastLetters),
        lastName.slice(0, numLastLetters) + firstName.slice(0, numFirstLetters),
        firstName.slice(-numFirstLetters) + lastName.slice(-numLastLetters),
        lastName.slice(-numLastLetters) + firstName.slice(-numFirstLetters)
    ];

    // Add reversed versions of each name
    var reversedNames = nameOptions.map(function(name) {
        return name.split("").reverse().join("");
    });

    // Combine original names, reversed names, and their reverse
    var allNames = nameOptions.concat(reversedNames);
    var reversedAllNames = allNames.map(function(name) {
        return name.split("").reverse().join("");
    });

    // Combine original names and reversed names
    allNames = allNames.concat(reversedAllNames);

    // Clear previous results
    var companyNameElement = document.getElementById("companyName");
    companyNameElement.innerHTML = "";

    // Display all unique names
    allNames.forEach(function(name) {
        var element = document.createElement("p");
        element.textContent = name;
        companyNameElement.appendChild(element);
    });
}
