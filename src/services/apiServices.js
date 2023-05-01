const apiURL = 'https://newsapi.org';



export async function getEverithing(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY
    })
    return await fetch(`${apiURL}/v2/everything?${params}`);
}

export async function getEverithingDummy() {
    return await fetch(`/News/dummy-response.json`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}

export async function getSources() {
    const params = new URLSearchParams({
        apiKey: process.env.REACT_APP_API_KEY
    })
    return await fetch(`${apiURL}/v2/top-headlines/sources?${params}`);
}
