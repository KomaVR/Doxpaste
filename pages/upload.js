import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

const UploadPaste = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleUpload = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('pastes')
      .insert([
        {
          title,
          content,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      alert(error.message);
    } else {
      router.push('/');
    }
  };

  return (
    <div>
      <h2>Upload Paste</h2>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Paste Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Paste Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPaste;
