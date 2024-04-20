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


export default function Hero(){
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
        <>
        <section className="card-grid">             
                    <div className="card-image">
                       <img src={news.image_link}
                        alt="image"
                        className="responsive"
                        loading="lazy"
                         />
                    </div>
                    <div className="card-content">
                        <h1 className="card-header">About the Card Here</h1>
                        <p className="card-text">
                            {news.content}
                        </p>
                    </div>
        </section>
        </>
    ) 
}