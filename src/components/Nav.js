import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/search">
        <div>SEARCH</div>
      </Link>
      <Link to="/menu">
        <div>MENU</div>
      </Link>
    </div>
  );
}

export default Nav;
