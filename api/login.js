import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(200).json({ message: "User logged in successfully" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
