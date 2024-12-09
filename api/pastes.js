import fs from "fs/promises";
import path from "path";

const pastesPath = path.join(process.cwd(), "data", "pastes.json");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ success: false, message: "Paste content cannot be empty!" });
    }

    const pastes = JSON.parse(await fs.readFile(pastesPath, "utf-8"));
    pastes.push({ content });
    await fs.writeFile(pastesPath, JSON.stringify(pastes, null, 2));

    res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    const pastes = JSON.parse(await fs.readFile(pastesPath, "utf-8"));
    res.status(200).json(pastes);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
