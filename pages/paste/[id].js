import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function PastePage() {
  const router = useRouter();
  const { id } = router.query;
  const [paste, setPaste] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchPaste = async () => {
      const { data, error } = await supabase.from('pastes').select('*').eq('id', id).single();
      if (error) console.error(error);
      else setPaste(data);
    };

    const fetchUser = async () => {
      const { data: user } = await supabase.auth.getUser();
      setUser(user);
    };

    if (id) {
      fetchPaste();
      fetchUser();
    }
  }, [id]);

  if (!paste) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{paste.title}</h1>
      <p>Author: {user ? paste.author : 'ANONYMOUS'}</p>
      <p>{paste.content}</p>
    </div>
  );
}
