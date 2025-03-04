// Fake Login System
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === "admin" && pass === "password123") {
        document.getElementById("loginMessage").innerText = "Login successful!";
    } else {
        document.getElementById("loginMessage").innerText = "Invalid credentials.";
    }
}

// Server Status (Replace with actual API later)
async function checkServerStatus() {
    let statusElement = document.getElementById("status");
    try {
        let response = await fetch("https://api.mcsrvstat.us/2/play.example.com");
        let data = await response.json();
        if (data.online) {
            statusElement.innerHTML = `🟢 Online - ${data.players.online} players`;
        } else {
            statusElement.innerHTML = "🔴 Offline";
        }
    } catch (error) {
        statusElement.innerHTML = "⚠️ Error fetching status";
    }
}

checkServerStatus();
setInterval(checkServerStatus, 30000); // Update every 30 seconds
