import axios from "axios";
const KEY = "AIzaSyDXOKVUGhTEHBgftDq6cb76URZzAOHJ6WQ";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 15,
        key:KEY
    }

})