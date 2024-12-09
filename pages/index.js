// pages/index.js
import { useState, useEffect } from "react";

export default function Home() {
  const [pastes, setPastes] = useState([]);
  const [content, setContent] = useState("");

  const fetchPastes = async () => {
    const response = await fetch("/api/pastes");
    const data = await response.json();
    setPastes(data);
  };

  const createPaste = async () => {
    if (!content) return;

    await fetch("/api/pastes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    setContent("");
    fetchPastes();
  };

  useEffect(() => {
    fetchPastes();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1>Pastebin Clone</h1>
      <textarea
        placeholder="Write your paste here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "100%", height: "100px", marginBottom: "10px" }}
      ></textarea>
      <button onClick={createPaste}>Submit Paste</button>
      <h2>Recent Pastes</h2>
      <ul>
        {pastes.map((paste, index) => (
          <li key={index}>{paste.content}</li>
        ))}
      </ul>
    </div>
  );
}
