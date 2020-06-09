const getImgURL = (oldUrl) => {
    // Extract last word after '/'
    let imgId = /([^/]*)$/.exec(oldUrl)[0]
    return `https://source.unsplash.com/${imgId}/275X140`
}

export { getImgURL };