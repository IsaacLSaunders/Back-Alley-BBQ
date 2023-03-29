import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <Link to='/' className="clickable-logo"><img className='logo'src='/logo.svg'/></Link>
      <nav className="Navbar">
        <ul className="nav-links">
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/menu'>Sample Menus</Link>
          </li>
          <li>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link to='/recipes'>Recipes</Link>
          </li>
          <li>
            <Link to='/calc'>Calculator</Link>
          </li>
        </ul>
      </nav>
        <Link className='sign-up' to='/sign-up'><button>Get Updates</button></Link>
    </header>
  )
}
