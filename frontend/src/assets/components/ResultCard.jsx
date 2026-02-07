export default function ResultCard({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2>Emotion: {data.emotion}</h2>
      <h3>Genre: {data.genre}</h3>

      {data.result.map(m => (
        <p key={m}>{m}</p>
      ))}
    </div>
  );
}
