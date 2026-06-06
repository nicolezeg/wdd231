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
document.getElementById("display-org").textContent = params.get("organization");
document.getElementById("display-desc").textContent = params.get("description");
// Display Membership Level
const levelValue = params.get("membershipLevel");
let levelText = "";

if (levelValue === "np") levelText = "NP Membership (Free)";
else if (levelValue === "bronze") levelText = "Bronze Membership";
else if (levelValue === "silver") levelText = "Silver Membership";
else if (levelValue === "gold") levelText = "Gold Membership";
else levelText = levelValue;

document.getElementById("display-level").textContent = levelText;

if (params.get("timestamp")) {
    const date = new Date(params.get("timestamp"));
    document.getElementById("display-date").textContent = date.toLocaleString();
}