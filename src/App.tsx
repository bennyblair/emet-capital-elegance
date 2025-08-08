import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return <div style={{ padding: 24 }}><h2>Home</h2></div>;
}
function About() {
  return <div style={{ padding: 24 }}><h2>About</h2></div>;
}

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1>Emet Capital</h1>
      <nav style={{ display: "flex", gap: 12, margin: "12px 0" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
