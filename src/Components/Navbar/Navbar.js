import React from 'react'
import classes from './Navbar.module.css'
const Navbar = () => {
  return (
    <div>
    <nav className={classes.sideNavbar}>
    <ul className={classes.navList}>
      <a href="/"><li><i className={`${classes.fafa} ${classes.active} fa-solid fa-house`}></i> <br/> Home </li></a>
      <a href="/"><li><i className={`${classes.fafa} fa-solid fa-globe`}></i> <br/> International</li></a>
      <a href="/"><li><i className={`${classes.fafa} fa-solid fa-film`}></i> <br/> Entertainment</li></a>
      <a href="/"><li><i className={`${classes.fafa} fa fa-briefcase`}></i> <br/>Business</li></a>
      <a href="/"><li><i className={`${classes.fafa} fa fa-bicycle`}></i> <br/> Soprts</li></a>
      <a href="/"><li><i className={`${classes.fafa} fa fa-medkit`}></i> <br/> Health</li></a>
    </ul>
  </nav>
  <div className={classes.sideNavbarFake}></div>
  </div>
  )
}

export default Navbar