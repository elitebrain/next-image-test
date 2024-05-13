import axios from "axios";

const fetcher = async (url) => axios(url).then((res) => res.data);

export { fetcher };
