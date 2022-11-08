import axios from "axios";
import { setBlogs } from "./redux/reducer/mainState";
import { Store } from "./redux/Store";


export const haafidhPage = () => {
    window.open('https://apps.apple.com/us/app/haafidh/id1571078630', '_blank');
}

export const swimbolsPage = () => {
    window.open('https://apps.apple.com/us/app/swimbols/id1525226399', '_blank');
}

export const countdownPage = () => {
    window.open('https://apps.apple.com/us/app/countdown-for-your-events/id1519488760', '_blank');
}

export const twitterPage = () => {
    window.open('https://twitter.com/skydevz', '_blank');
}

export const getAllBlogs = () => {
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@imthath";
    axios.get(`${url}`)
    .then((response) =>  {
        const datas = response.data
        Store.dispatch(setBlogs(datas.items))
        // setBlogs(datas.items)
    })
    .catch((errror) => console.error(errror))
    // console.log(blogs);
}