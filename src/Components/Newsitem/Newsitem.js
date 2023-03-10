import axios from 'axios'
import { AvatarGenerator } from 'random-avatar-generator'
import React, { useEffect, useState } from 'react'
import Card from '../UI/Card'
import classes from './Newsitem.module.css'
import parse from "html-react-parser";

const Newsitem = (props) => {
    const generator = new AvatarGenerator();
    const {date,link,title,excerpt,author,parselyimageurl,parselysection,parselytags} =props
    const [authorDetails,setAuthorDetails]=useState()
    const getAuthor=async()=>{
        axios.get(`https://techcrunch.com/wp-json/tc/v1/users/${author}`)
      .then(function (res) {
        setAuthorDetails(res.data)
        
      })
      .catch(function (err) {
        console.log(err);
      });
      }
    
      useEffect(() => {
       getAuthor()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

  return (

    <Card>    <a href={link} target='_blank' rel="noreferrer">
        <div className={classes.imageContainer}>
            <img className={classes.cardImage} src={parselyimageurl} alt={title}/>
            <div className={classes.tag}>{parse(parselysection)}</div>
            {authorDetails&&<div className={classes.authorDetails}> <img src={authorDetails.cbAvatar===''||!authorDetails.cbAvatar?generator.generateRandomAvatar():authorDetails.cbAvatar} alt={authorDetails.name}/> <p>{authorDetails.name} <span>{new Date(date).toLocaleDateString("en-IN", {month: 'short', day: '2-digit', year: 'numeric', hour: 'numeric', minute:'numeric'})}</span></p> </div>}
            <p className={classes.parselytagsContainer}>{parselytags.split(',').map(e=><span key={e} className={classes.parselytags}>{e}</span>)}</p>
        </div></a>
        <div className={classes.title}>{parse(title)}</div>
        <div className={classes.excerpt}>{excerpt.length>95? parse(excerpt)[0].props.children.slice(0,95)+'...' : parse(excerpt)}</div>
        <a href={link} target='_blank' className={classes.readMore} rel="noreferrer">Read More</a>
    </Card>
    
    
  )
}
export default Newsitem
