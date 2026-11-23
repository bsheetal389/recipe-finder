import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>Recipe finder</h2>
      <Link to="/">Home</Link>
      {"|"}
      <Link to="/favorites">favorites</Link>
    </nav>
  );
}
