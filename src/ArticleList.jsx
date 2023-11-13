import React from 'react'
import axios from "axios";
import { useEffect, useState }  from "react";
import Feed from "./Feed";

const ArticleList = ({id, name, imageUrl}) => {
    const [articles, setArticles] = useState([]);

    console.log(articles);
   

    useEffect (() => {
        async function getArticles() {
            try {
            const res = await axios.get(`http://localhost:4000/channels/${id}/news`);
            setArticles(res.data);

            } catch (error){
            console.log(error);
            }
        }
        getArticles();
    }, [id])
  return (
    <div className="border p-5 rounded-xl">
        <div className="bg-gray-100 flex items-center justify-center rounded-lg py-3 px-6 mb-5 object-cover h-32">
            <img title={name} alt={name} src={imageUrl} style={{maxHeight:100}}/>
        </div>
        <div className='h-screen overflow-y-auto'>
            {articles.map((item, i) =>
            <Feed 
                key = {i}
                title = {item.title}
                link = {item.link}
                pubDate = {item.pubDate}
            />
            )}
        </div>
        
    </div>
)}

export default ArticleList;