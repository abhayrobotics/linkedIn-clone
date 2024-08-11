import React, { useEffect, useState } from "react";
import { newsURL } from "../utils/constant";
import { Link } from "react-router-dom";

const News = () => {
  const [newsData, setnewsData] = useState([]);
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const data = await fetch(newsURL + process.env.REACT_APP_NEWS_API_KEY);
    const json = await data.json();
    // console.log(json);
    // console.log(json.articles.slice(0, 10));
    setnewsData(json.articles.slice(0, 10));
  };
  
  const now= new Date();
// console.log(now.getDate() - newsData[6]?.publishedAt?.split("T")[0]?.split("-")[2]);
  return (
    <div className=" max-w-[250px] min-w-16 m-1    h-fit bg-white  rounded-lg  ">
      <div>
        <h1 className="text-xl font-semibold p-3 pb-2 text-slate-700">
          Linkedin News
        </h1>
        <h2 className="text-md font-semibold px-3 text-slate-500">
          Top Stories
        </h2>
      </div>
      {newsData?.map((item) => {
        return (
          <div key={item.title} className="hover:bg-slate-200 my-2">
            <Link to={item.url}>
              <h1 className="text-sm font-semibold px-3 text-slate-700 mt-2 mb-1 line-clamp-2">
                {item.title.split("- ")[0]}
              </h1>
            </Link>
            <div className="text-xs text-slate-500 px-3 mb-2">{now.getDate() - item?.publishedAt?.split("T")[0]?.split("-")[2]}d ago</div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
