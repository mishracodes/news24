import React from 'react'
import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes.header}>
        <div className={classes.navLogo}>
          <div className={classes.avtarContainer}>
            <div><img className={classes.avatar} src='https://en.gravatar.com/userimage/138936915/5f80bc51dcd89a308df0bfc0d0c1557e.png' alt="avatar" /></div>
            <div>
            <div className={classes.userName}>Good Morning, <span className={classes.smalltext}>Amit</span></div>
            <div className={classes.dateTime}>{new Date().toLocaleDateString("en-IN", {month: 'short', day: '2-digit', year: 'numeric', hour: 'numeric', minute:'numeric'})}</div>
            </div>
          </div>
        </div>

        <form className={`mdHidden ${classes.searchForm}`}>
          <input className={classes.searchInput} type="text" name="search" placeholder=' Search for articles' />

        </form>
        <div className={classes.logout}>Logout</div>
        <div className={classes.smMenu}><i className="fa fa-bars" aria-hidden="true"></i> Menu</div>


    </div>
  )
}

export default Header