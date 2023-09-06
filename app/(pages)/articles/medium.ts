import { toast } from "react-toastify";

export interface MediumModel {
    status: string
    feed: Feed
    items: Item[]
  }
  
  export interface Feed {
    url: string
    title: string
    link: string
    author: string
    description: string
    image: string
  }
  
  export interface Item {
    title: string
    pubDate: string
    link: string
    guid: string
    author: string
    thumbnail: string
    description: string
    content: string
    enclosure: Enclosure
    categories: string[]
  }
  
  export interface Enclosure {}
  

const getArticles = async () => {
    try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40yunustahayilmaz`, {
            method: "GET",
            next: { revalidate: 3600 }
        });

        const data: MediumModel = await response.json();

        return data;

    } catch (error) {
        toast.error('Yazılar Getirilirken Hata Oluştu!');
        return false
    }
}

export default getArticles