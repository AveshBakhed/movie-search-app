const ApiKey = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3";

const url = `${BASE_URL}/movie/popular?api_key=${ApiKey}&language=en-US&page=1&include_adult=false`;

export async function getDataApi() {
    try{
        const res = await fetch(url)
    const data = await res.json()
    return data   
    }catch(err){
        console.log("error from fetching the data from api", err)
    }
}

export async function  searchResultsApiData(query) {
    try{
        const res = await fetch(`${BASE_URL}/search/movie?api_key=${ApiKey}&query=${encodeURIComponent(query)}`)
        const data = await res.json()
        return data.results
    }catch(err){
        console.log("search Error",err)
    }
    
}