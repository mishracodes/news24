/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Card from './Card'
import classes from './Skleton.module.css'
const Skleton = () => {
  return (
    <Card>
        <div className={`${classes.imageContainer} ${classes.skeleton}`}>
            <img src={undefined} className={`${classes.cardImage} ${classes.skeleton}`} alt=""/>
            <div className={`${classes.tag} ${classes.skeleton}`}></div>
            <div className={`${classes.authorDetails} ${classes.skeleton}`}> <img  src={undefined} alt=""/><p><span></span></p></div>
        </div>
        <div className={`${classes.title} ${classes.skeleton}`}>Daily Crunch: Bach to the future – Forthcoming Apple Music Classical app willDaily Crunch: Bach to the future – Forthcoming Apple Music Classical app will</div>
        <div className={`${classes.excerpt} ${classes.skeleton}`}></div>
        <a className={`${classes.readMore} ${classes.skeleton}`} rel="noreferrer"> </a>
        
    </Card>
  )
}

export default Skleton