import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ success: false, message: "Paste content cannot be empty!" });
    }

    const { error } = await supabase.from("pastes").insert([{ content }]);

    if (error) {
      return res.status(500).json({ success: false, message: "Error saving paste!" });
    }

    res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    const { data, error } = await supabase.from("pastes").select("*");

    if (error) {
      return res.status(500).json({ success: false, message: "Error retrieving pastes!" });
    }

    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
