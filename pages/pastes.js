import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import Link from 'next/link';

const Pastes = () => {
  const [pastes, setPastes] = useState([]);

  useEffect(() => {
    const fetchPastes = async () => {
      const { data, error } = await supabase.from('pastes').select('*');

      if (error) {
        alert(error.message);
      } else {
        setPastes(data);
      }
    };

    fetchPastes();
  }, []);

  return (
    <div>
      <h2>All Pastes</h2>
      {pastes.map((paste) => (
        <div key={paste.id}>
          <Link href={`/paste/${paste.id}`}>
            <a>
              <h3>{paste.title}</h3>
              <p>{paste.content.slice(0, 100)}...</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pastes;
