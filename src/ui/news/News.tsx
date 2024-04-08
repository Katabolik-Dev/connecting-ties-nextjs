'use client'

import Link from 'next/link';
import {useState, useEffect} from 'react';
import axios from 'axios'; 
import Image from 'next/image'


interface NewsItem {
    id: number;
    title: string;
    description: string;
    content: string;
    image_link: string;
    image_description: string;
}


export default function News(){
    const [news, setNews] = useState<NewsItem>({} as NewsItem);
    const domain = 'https://connecting-ties-api.vercel.app'

    useEffect(()=>{
        const fetchNews = async () => {
            try {
                const response = await axios.get<NewsItem[]>(`${domain}/news`);
                setNews(response.data[0]);
                console.log(response.data[0]);
            } catch (error) {
                console.error('Error Fetching News', error)
            }
        }
        fetchNews();
    },[])

    
    return (
        <section className="news-section">
            <div className="news-card">
                <article className="news-article">
                    <div className="card-image">
                       <img src={news.image_link}
                        alt="image"
                        className="responsive"
                        loading="lazy"
                         />
                    </div>
                    <div className="card-item">
                        <p className="card-text">
                            {news.content}
                        </p>
                    </div>
                </article> 
            </div>
        </section>
    ) 
}