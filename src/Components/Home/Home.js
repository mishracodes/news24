import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Newsitem from '../Newsitem/Newsitem';
import Skleton from '../UI/Skleton';
import classes from './Home.module.css'
const Home = () => {

  const [posts,setPosts]=useState();
  const [err,seterr]=useState();

  const getdata=async()=>{
    axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=50&context=embed')
  .then(function (res) {
    setPosts(res.data)
  })
  .catch(function (err) {
    console.log(err);
    seterr(err)
  });
  }

  useEffect(() => {
   getdata()
  }, [])
  
  
  return (
    <div className={classes.main}>
        <div className={classes.background}>

        </div>
        {err&& <div className={classes.err}> Some Error Occured:  {err.message}</div>}
        <div className={classes.content}> 
          {posts&&posts.map(e=><div key={e.id} className={classes.items}>
            <Newsitem 
            
            date={e.date}
            link={e.link}
            title={e.title.rendered}
            excerpt={e.excerpt.rendered}
            author={e.author}
            shortlink={e.shortlink}
            parselyimageurl={e.parselyMeta['parsely-image-url']}
            parselysection={e.parselyMeta['parsely-section']}
            parselytags={e.parselyMeta['parsely-tags']}/>
            </div>)}

            {!posts&&!err&&new Array(10).fill(0).map((e,i)=><Skleton key={i}/>)}
            
        </div>
        
    </div>
  )
}

export default Home