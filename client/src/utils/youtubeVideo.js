const getVideoUrl = (oldUrl) => {
    // Extract last word after '/'
    let videoId = /([^/]*)$/.exec(oldUrl)[0]
    return `https://www.youtube.com/embed/${videoId}`
}

export { getVideoUrl };