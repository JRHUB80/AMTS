import {Link} from 'react-router-dom';

const Header = () => {
    return (
       <header className="navbar">
        <div className="logo">
          <img
            src="/images/amts-logo.png"
            alt="AMTS Properties"
            className="logo-image"
          />
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#buy">Buy</a>
          <a href="#sell">Sell</a>
          <Link to="my-story">My Story</Link>
          <a href="#experience">The Experience</a>
          <a href="#areas">Featured Areas</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header> 
    )
}
export default Header;