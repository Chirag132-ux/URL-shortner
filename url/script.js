// script.js

// Function to generate a random string of specified length
function generateShortCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Function to handle the URL shortening
document.getElementById("shortenBtn").addEventListener("click", function() {
    const urlInput = document.getElementById("urlInput").value;
    
    // Validate if the input is a URL
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,6}(\/[a-zA-Z0-9\-_.]*)*$/;
    if (!urlInput.match(urlPattern)) {
        alert("Please enter a valid URL.");
        return;
    }

    // Generate a short URL code (simulated shortening)
    const shortCode = generateShortCode(6);  // You can change the length of the short code

    // Simulate the full shortened URL
    const shortenedUrl = `https://short.ly/${shortCode}`;

    // Display the shortened URL
    document.getElementById("shortenedUrl").textContent = shortenedUrl;
    document.getElementById("result").style.display = 'block';
});