import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Link from 'next/link';

export default function Home() {
  const [pastes, setPastes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchPastes = async () => {
      const { data, error } = await supabase.from('pastes').select('*');
      if (error) console.error(error);
      else setPastes(data);
    };

    const fetchUser = async () => {
      const { data: user } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchPastes();
    fetchUser();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Doxbin-Style Pastes</h1>
      {user ? <p>Logged in as: {user.email}</p> : <p>Viewing as: ANONYMOUS</p>}
      <ul>
        {pastes.map((paste) => (
          <li key={paste.id}>
            <Link href={`/paste/${paste.id}`}>
              <a>{paste.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
