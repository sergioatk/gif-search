export default async function getGifs(key, term) {

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${term}&limit=10`;


    const call = await fetch(apiURL);
    const json = await call.json();

    const { data } = json;
    const gifs = data.map(gif => (
        {
            title: gif.title,
            url: gif.images.downsized_medium.url,
            id: gif.id
        }

    ));
    
    return gifs;

}


