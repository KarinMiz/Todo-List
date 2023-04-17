import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const path = window.location.pathname;

  return (
    <nav className="nav">
      <h6 className="site-title" onClick={()=>{window.location.href="/"}} style={{cursor:'pointer'}}>My Todo List</h6>
      <ul>
        <li className={path === "/" ? "active" : ""}>
          <a href="/">Home</a>
        </li>
        <li className={path === "/add" ? "active" : ""}>
          <a href="/add">Add</a>
        </li>
        <li className={path === "/history" ? "active" : ""}>
          <a href="/history">History</a>
        </li>
      </ul>
    </nav>
  );
}
