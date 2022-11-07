import axios from "axios";
import { setBlogs } from "./redux/reducer/mainState";
import { Store } from "./redux/Store";

export const appsPage = () => {
    window.open('https://apps.apple.com/developer/mohammed-imthathullah-m/id1507415155', '_blank');
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