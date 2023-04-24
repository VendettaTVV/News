const apiURL = 'https://newsapi.org';



export async function getEverithing(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY
    })
    return await fetch(`${apiURL}/v2/everything?${params}`);
}
