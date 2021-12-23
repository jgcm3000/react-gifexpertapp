export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=5&api_key=BAlJ2R9NXK2yuQhJb3nF5n2sCz3wjscq`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    // console.log(gifs);
    // setImages(gifs);
    return gifs;
}