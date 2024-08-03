import React, { useEffect } from 'react'
import { newsURL } from '../utils/constant';

const News = () => {


  
  useEffect(()=>{
    fetchNews();
  },[])

  const fetchNews = async () => {
    console.log(newsURL)
    const data = await fetch(newsURL);
    const json = await data.json();
    console.log(json);
  }


  return (
    <div className=" max-w-[100%] min-w-16 m-1   h-56 bg-white  rounded-lg">
    News
    </div>
  )
}

export default News