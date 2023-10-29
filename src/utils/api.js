import axios from 'axios';

//declaring the API key
// const apiKey = process.env.REACT_APP_NEWS_API
const apiKey = "a76b34b2e105fa4206f09f61dfd48f38"; //HIDE THIS!

//declaring a base URL for the api
const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

//const tmdbToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzZiMzRiMmUxMDVmYTQyMDZmMDlmNjFkZmQ0OGYzOCIsInN1YiI6IjY1M2QxNGI1MTA5Y2QwMDE0ZGY0NTQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cnpxW6AFFrNlmVSZWuPu8zq0fxQ44ka89MBEwXh69Nw";
//const tmdbToken = import.meta.env.REACT_APP_TMDB_TOKEN;
// const headers = {
//     Authorization: "bearer " + tmdbToken,
// };

//function to fetch data from the api
export const fetchApiData = async ()=>{
    try {
        const response = await axios.get(baseUrl);
        //using axios, te data is already converted to json, we only need to 
        //extract data out of it
        return response.data;
    } catch (error) {
        console.log("Error contacting the API, the server says: " + error);
        return error;
    }
};