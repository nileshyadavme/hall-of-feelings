import { useState } from "react";
import MoodInput from "./assets/components/MoodInput";
import ResultCard from "./assets/components/ResultCard";
import api from "./services/api";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const handleSubmit = async (text) => {
    const res = await api.post("/recommend", { text });
    setData(res.data);
  };

  return (
    <div className="app">
      <h1>MoodFlix 🎬</h1>
      <MoodInput onSubmit={handleSubmit} />
      <ResultCard data={data} />
    </div>
  );
}

export default App;
