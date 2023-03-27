import './navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <a className="site-title">
        My Todo List
      </a>
      <ul>
        <li className="active">
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
