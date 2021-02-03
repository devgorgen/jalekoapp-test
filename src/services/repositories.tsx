// import { apiSearch, apiSuggestQuery } from "./api";
import axios from 'axios';

const API_KEY = 'AIzaSyCdPBJSssGgg81qB_1FbBQwyiDKB2LfkoY';

export const getVideos = async query => {
    await axios
        .get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}&maxResults=10`,
        )
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
        });
};

// export const getSuggestions = async (query) => {
//     return await apiSuggestQuery.get(`/${query}`);
// };
