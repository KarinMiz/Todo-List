import './navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <h6 className="site-title">
        My Todo List
      </h6>
      <ul>
        <li>
          <a href="/">Home</a>
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
