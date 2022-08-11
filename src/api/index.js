import axios, { Axios } from "axios";

const url = 'http://10.211.55.8:5000/posts'

export const fetchPosts = () => axios.get(url);