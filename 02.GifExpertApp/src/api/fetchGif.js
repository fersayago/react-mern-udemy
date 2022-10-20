const fetchGifs = async({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=0yozM6lsSlv4u6HCwUqaLP4GJBbWPLF1&q=${category}&limit=10`
  
  const resp = await fetch( url );
  const { data } = await resp.json();
  
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;
}

export default fetchGifs;