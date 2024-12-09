import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

const Paste = ({ id }) => {
  const [paste, setPaste] = useState(null);

  useEffect(() => {
    const fetchPaste = async () => {
      const { data, error } = await supabase
        .from('pastes')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        alert(error.message);
      } else {
        setPaste(data);
      }
    };

    fetchPaste();
  }, [id]);

  if (!paste) return <p>Loading...</p>;

  return (
    <div>
      <h2>{paste.title}</h2>
      <p>{paste.content}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

export default Paste;
