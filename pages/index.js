import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [tab, setTab] = useState("register"); // "register" or "login"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pastes, setPastes] = useState([]);

  useEffect(() => {
    fetchPastes();
  }, []);

  const fetchPastes = async () => {
    const res = await fetch("/api/pastes");
    setPastes(await res.json());
  };

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

  return (
    <div className="container">
      <header className="header">
        <h1>Doxbin</h1>
      </header>
      <main>
        <div className="tabs">
          <button
            className={tab === "register" ? "active-tab" : "tab"}
            onClick={() => setTab("register")}
          >
            Register
          </button>
          <button
            className={tab === "login" ? "active-tab" : "tab"}
            onClick={() => setTab("login")}
          >
            Login
          </button>
        </div>

        {tab === "register" ? (
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
        ) : (
          <section className="auth-section">
            <h2>Login</h2>
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
            <button onClick={handleLogin} className="button">
              Login
            </button>
          </section>
        )}

        <section className="paste-section">
          <h2>Pastes</h2>
          <ul className="pastes">
            {pastes.map((paste, index) => (
              <li key={index} className="paste-item">
                <Link href={`/paste/${paste.id}`}>
                  <a>{paste.title || `Paste #${index + 1}`}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Doxbin Clone</p>
      </footer>
    </div>
  );
}
