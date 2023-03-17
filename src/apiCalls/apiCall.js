
const fetchArticlesData = async (data) => {
    return await fetch(`https://api.nytimes.com/svc/topstories/v2/${data}.json?api-key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

export {fetchArticlesData}