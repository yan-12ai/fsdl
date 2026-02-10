document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("successMsg").textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;
    const address = document.getElementById("address").value.trim();
    const terms = document.getElementById("terms").checked;
    const skills = document.querySelectorAll('input[name="skills"]:checked');

    // Name (min 2 chars, no number start)
    if (name.length < 2 || !isNaN(name.charAt(0))) {
        document.getElementById("nameError").textContent =
            "Name must be at least 2 characters and not start with a number";
        valid = false;
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
    }

    // Phone
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone must be exactly 10 digits";
        valid = false;
    }

    // Password
    if (!/^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/.test(password)) {
        document.getElementById("passwordError").textContent =
            "Password must have 8 chars, 1 uppercase & 1 special character";
        valid = false;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match";
        valid = false;
    }

    // Age
    if (age < 18 || age > 60) {
        document.getElementById("ageError").textContent =
            "Age must be between 18 and 60";
        valid = false;
    }

    // Gender
    if (gender === "") {
        document.getElementById("genderError").textContent = "Select gender";
        valid = false;
    }

    // Country
    if (country === "") {
        document.getElementById("countryError").textContent = "Select country";
        valid = false;
    }

    // Address
    if (address.length < 10) {
        document.getElementById("addressError").textContent =
            "Address must be at least 10 characters";
        valid = false;
    }

    // Skills
    if (skills.length === 0) {
        document.getElementById("skillsError").textContent =
            "Select at least one skill";
        valid = false;
    }

    // Terms
    if (!terms) {
        document.getElementById("termsError").textContent =
            "You must agree to the terms";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMsg").textContent =
            "Form submitted successfully!";
        document.getElementById("myForm").reset();
    }
});
