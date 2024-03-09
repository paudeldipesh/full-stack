import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready.");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: "001",
      title: "The Dizzy Calculator",
      content: [
        "Why did the calculator feel dizzy?",
        "Because it had too many problems!",
      ],
    },
    {
      id: "002",
      title: "The Musical Chair",
      content: [
        "Why did the chair join the band?",
        "Because it had a few legs and could really rock!",
      ],
    },
    {
      id: "003",
      title: "The Flashlight's Confession",
      content: [
        "What did the flashlight say to the battery?",
        "\"I'm sorry, but you just don't have enough energy to keep up with me!\"",
      ],
    },
    {
      id: "004",
      title: "The Shy Fridge",
      content: [
        "Why did the fridge blush?",
        "Because it saw the salad dressing!",
      ],
    },
    {
      id: "005",
      title: "The Sneezing Book",
      content: ["Why was the book sneezing?", "Because it had a dust cover!"],
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
