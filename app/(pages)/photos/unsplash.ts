import { toast } from "react-toastify"

export type UnsplashData = UnsplashItem[]

export interface UnsplashItem {
    id: string
    slug: string
    created_at: string
    updated_at: string
    promoted_at: any
    width: number
    height: number
    color: string
    blur_hash: string
    description: any
    alt_description: any
    breadcrumbs: any[]
    urls: Urls
    links: Links
    likes: number
    liked_by_user: boolean
    current_user_collections: any[]
    sponsorship: any
    topic_submissions: TopicSubmissions
    user: User
}

export interface Urls {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
}

export interface Links {
    self: string
    html: string
    download: string
    download_location: string
}

export interface TopicSubmissions { }

export interface User {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
    last_name: string
    twitter_username: any
    portfolio_url: string
    bio: any
    location: string
    links: Links2
    profile_image: ProfileImage
    instagram_username: string
    total_collections: number
    total_likes: number
    total_photos: number
    accepted_tos: boolean
    for_hire: boolean
    social: Social
}

export interface Links2 {
    self: string
    html: string
    photos: string
    likes: string
    portfolio: string
    following: string
    followers: string
}

export interface ProfileImage {
    small: string
    medium: string
    large: string
}

export interface Social {
    instagram_username: string
    portfolio_url: string
    twitter_username: any
    paypal_email: any
}

const getPhotos = async () => {
    try {
        const response = await fetch(`https://api.unsplash.com/users/yunustahayilmaz/photos?client_id=${process.env.UNSPLASH_ACCESS_TOKEN}`, {
            method: "GET",
            next: { revalidate: 3600 }
        });

        const data: UnsplashData = await response.json();

        return data;

    } catch (error) {
        toast.error('Fotoğraflar Getirilirken Hata Oluştu!');
        return false
    }
}

export default getPhotos