import { useRef } from "react";
// import { useLocation } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  // const location = useLocation();
  // const [selectedItem, setSelectedItem] = useState(null);
  const navRef = useRef();

  return (
    <nav className="nav">
      <h6 className="site-title">
        My Todo List
      </h6>
      <ul>
        <li>
          <a href="/" onClick={navRef}>Home</a>
        </li>
        <li>
          <a href="/add">Add</a>
        </li>
        <li>
          <a href="/history">History</a>
        </li>
      </ul>
    </nav>
  );
}
