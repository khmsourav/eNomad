
export const fetchAllDiscoverData = () => {
    const data =  fetch("https://dummyjson.com/posts?limit=3&select=title")
        .then((response) => response.json())
    return data;
}

export const fetchAllBlogsData = () => {
    const data =  fetch("https://dummyjson.com/posts?limit=3&select=title")
        .then((response) => response.json())
    return data;
}

export const fetchAllStoriesData = () => {
    const data =  fetch("https://dummyjson.com/posts?limit=5&select=title")
        .then((response) => response.json())
    return data;
}
