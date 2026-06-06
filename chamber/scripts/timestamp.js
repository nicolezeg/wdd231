// Code to set the hidden timestamp in the form
const timestampInput = document.getElementById("timestamp");

if (timestampInput) {
    timestampInput.value = new Date().toISOString();
}


// Get parameters from the URL
const params = new URLSearchParams(window.location.search)// Combine first and last name
const fullName = params.get("fName") + " " + params.get("lName");
document.getElementById("display-name").textContent = fullName;

// Display email, phone, and organization
document.getElementById("display-email").textContent = params.get("email");
document.getElementById("display-phone").textContent = params.get("phone");
document.getElementById("display-org").textContent = params.get("organization")// Display the timestamp in a readable format
if (params.get("timestamp")) {
    const date = new Date(params.get("timestamp"));
    document.getElementById("display-date").textContent = date.toLocaleString();
}