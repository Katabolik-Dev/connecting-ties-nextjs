import Link from 'next/link';
import {useState, useEffect} from 'react';
import axios from 'axios'; 
import Image from 'next/image'
import cabin from '@/public/cabin.jpg'


interface NewsItem {
    id: number;
    title: string;
    description: string;
    content: string;
    image_link: string;
    image_description: string;
}


export default function NewsCard(){
    const [news, setNews] = useState<NewsItem>({} as NewsItem);
    const domain = 'https://connecting-ties-api.vercel.app'

    // useEffect(()=>{
    //     const fetchNews = async () => {
    //         try {
    //             const response = await axios.get<NewsItem[]>(`${domain}/news`);
    //             setNews(response.data[0]);
    //             console.log(response.data[0]);
    //         } catch (error) {
    //             console.error('Error Fetching News', error)
    //         }
    //     }
    //     fetchNews();
    // },[])
    
    return (
                <Image className="news-image"
                        src={cabin}
                        alt="Image"
                        sizes='100vw'
                        style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    /> 
    ) 
}