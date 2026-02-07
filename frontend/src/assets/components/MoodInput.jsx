import { useState } from "react";

export default function MoodInput({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="How are you feeling?"
      />
      <button onClick={() => onSubmit(text)}>Recommend</button>
    </div>
  );
}
