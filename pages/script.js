document.getElementById("login-btn").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (data.success) {
    alert("Logged in!");
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("paste-section").style.display = "block";
  } else {
    alert(data.message);
  }
});

document.getElementById("register-btn").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  alert(data.message);
});

document.getElementById("submit-paste-btn").addEventListener("click", async () => {
  const content = document.getElementById("paste-input").value;

  const response = await fetch("/api/pastes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

  const data = await response.json();
  if (data.success) {
    alert("Paste submitted!");
    document.getElementById("paste-input").value = "";
    loadPastes();
  } else {
    alert(data.message);
  }
});

async function loadPastes() {
  const response = await fetch("/api/pastes");
  const data = await response.json();
  const pastesDiv = document.getElementById("pastes");
  pastesDiv.innerHTML = "";
  data.forEach((paste) => {
    const pasteDiv = document.createElement("div");
    pasteDiv.classList.add("paste");
    pasteDiv.textContent = paste.content;
    pastesDiv.appendChild(pasteDiv);
  });
}

loadPastes();
