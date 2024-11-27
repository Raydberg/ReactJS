export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GQ0svBEcLMHDU4XPQot0jS3YO9K4qYn2&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    //   console.log(data);

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    console.log(gifs);
    
    return gifs;
  };