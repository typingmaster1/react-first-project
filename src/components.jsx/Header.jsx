function Header(){
return (  
    <header className="header">
  <nav className="navbar">
    <div className="logo">
      <h2 className="logo-heading">Muhammad Yahya</h2>
    </div>
    <div className="hamburger" id="hamburger">
      <i className="fas fa-bars hamburger-icon" />
      <i className="fas fa-times cross-icon" />
    </div>
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-list-items">
          <a className="links" href="#Home">
            Home
          </a>
        </li>
        <li className="menu-list-items">
          <a className="links" href="#about">
            About
          </a>
        </li>
        <li className="menu-list-items">
          <a className="links" href="#Portfolio">
            Portfolio
          </a>
        </li>
        <li className="menu-list-items">
          <a className="links" href="#projects">
            Projects
          </a>
        </li>
        <li className="menu-list-items">
          <a className="links" href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
 
)}
export default Header;