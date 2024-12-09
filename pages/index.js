import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [pastes, setPastes] = useState([]);

  const handleRegister = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    alert((await res.json()).message);
  };

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    alert((await res.json()).message);
  };

  const fetchPastes = async () => {
    const res = await fetch("/api/pastes");
    setPastes(await res.json());
  };

  const createPaste = async () => {
    const res = await fetch("/api/pastes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    alert((await res.json()).message);
    fetchPastes(); // Refresh pastes after creating one
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Doxpaste</h1>
      </header>
      <main>
        <section className="auth-section">
          <h2>Register</h2>
          <input
            placeholder="Email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister} className="button">
            Register
          </button>
        </section>

        <section className="auth-section">
          <h2>Login</h2>
          <button onClick={handleLogin} className="button">
            Login
          </button>
        </section>

        <section className="paste-section">
          <h2>Create Paste</h2>
          <textarea
            placeholder="Paste content"
            className="textarea"
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={createPaste} className="button">
            Create Paste
          </button>
        </section>

        <section className="paste-section">
          <h2>View Pastes</h2>
          <button onClick={fetchPastes} className="button">
            Fetch Pastes
          </button>
          <ul className="pastes">
            {pastes.map((paste, index) => (
              <li key={index} className="paste-item">
                {paste}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Doxpaste</p>
      </footer>
    </div>
  );
}
