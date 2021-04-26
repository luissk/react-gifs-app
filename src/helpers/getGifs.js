
export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=j5a6sehMkIO0n6V0F1oFh08nuplNpTZS`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map( img => (
        {
            id:img.id, 
            url: img.images.downsized_medium.url,
            title:img.title
        }
    ));

    return gifs;
}