import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => setJokes(response.data))
      .catch((error) => console.log(error.message));
  });

  return (
    <div>
      <h1>Full Stack</h1>
      <h2>JOKES: {jokes.length}</h2>

      {jokes.map(({ id, title, content }) => (
        <div key={id}>
          <h3>{title}</h3>
          <h4>
            {content[0]} <br /> {content[1]}
          </h4>
        </div>
      ))}
    </div>
  );
}
