import './style.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">  
        <Link className="page-link" to={`/Movie-Seeker`}>
          <h1 className="title">Movie Seeker</h1>
        </Link>
    </header>
  )
}

export default Header