import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username);

    if (data.length > 0) {
      return res.status(400).json({ success: false, message: "User already exists!" });
    }

    const { error: insertError } = await supabase.from("users").insert([{ username, password }]);

    if (insertError) {
      return res.status(500).json({ success: false, message: "Error registering user!" });
    }

    res.status(200).json({ success: true, message: "Registered successfully!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
