import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pastes, setPastes] = useState([]);
  const [content, setContent] = useState("");

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
  };

  return (
    <div>
      <h1>Doxbin-Style Site</h1>
      <div>
        <h2>Register</h2>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
      <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <h2>Create Paste</h2>
        <textarea
          placeholder="Paste content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={createPaste}>Create</button>
      </div>
      <div>
        <h2>View Pastes</h2>
        <button onClick={fetchPastes}>Fetch Pastes</button>
        <ul>
          {pastes.map((paste, index) => (
            <li key={index}>{paste}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
