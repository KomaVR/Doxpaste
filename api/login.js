import fs from "fs/promises";
import path from "path";

const usersPath = path.join(process.cwd(), "data", "users.json");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const users = JSON.parse(await fs.readFile(usersPath, "utf-8"));

    if (users[username] && users[username].password === password) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials!" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
