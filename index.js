document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const popup = document.getElementById("popup");
    const popupResults = document.getElementById("popup-results");
    const closePopup = document.getElementById("close-popup");
    const resetButton = document.getElementById("reset-button");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Validate the form fields here
        if (validateForm()) {
            displayPopup();
        }
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
    });

    function validateForm() {
        // Add your validation logic here
        // You can check if fields are filled, validate email, etc.
        // Return true if the form is valid, otherwise return false
        // Example: 
        if (document.getElementById("first-name").value === "") {
            alert("First Name is required!");
            return false;
        }
        // Add more validation as needed
        return true;
    }

    function displayPopup() {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderElements = document.getElementsByName("gender");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        let selectedGender = "";
        genderElements.forEach((gender) => {
            if (gender.checked) {
                selectedGender += gender.value + ", ";
            }
        });
        selectedGender = selectedGender.slice(0, -2); // Remove the trailing comma and space

        const popupContent = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Gender:</strong> ${selectedGender}</p>
    <p><strong>Profession:</strong> ${profession}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile Number:</strong> ${mobile}</p>
`;

popupResults.innerHTML = popupContent;
popup.style.display = "block";
}

});