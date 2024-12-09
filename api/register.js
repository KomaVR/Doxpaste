import fs from "fs/promises";
import path from "path";

const usersPath = path.join(process.cwd(), "data", "users.json");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const users = JSON.parse(await fs.readFile(usersPath, "utf-8"));

    if (users[username]) {
      return res.status(400).json({ success: false, message: "User already exists!" });
    }

    users[username] = { password };
    await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
    res.status(200).json({ success: true, message: "Registered successfully!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
