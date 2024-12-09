let pastes = [];

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(pastes);
  } else if (req.method === "POST") {
    const { content } = req.body;
    if (!content) {
      res.status(400).json({ message: "Content is required" });
    } else {
      pastes.push(content);
      res.status(200).json({ message: "Paste created successfully" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
