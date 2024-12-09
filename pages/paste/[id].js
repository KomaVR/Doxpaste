import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Paste() {
  const router = useRouter();
  const { id } = router.query;
  const [paste, setPaste] = useState(null);

  useEffect(() => {
    if (id) fetchPaste();
  }, [id]);

  const fetchPaste = async () => {
    const res = await fetch(`/api/pastes?id=${id}`);
    setPaste(await res.json());
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Doxbin</h1>
      </header>
      <main>
        {paste ? (
          <section className="paste-content">
            <h2>{paste.title || `Paste #${id}`}</h2>
            <pre>{paste.content}</pre>
          </section>
        ) : (
          <p>Loading paste...</p>
        )}
      </main>
      <footer className="footer">
        <p>© 2024 Doxbin Clone</p>
      </footer>
    </div>
  );
}
