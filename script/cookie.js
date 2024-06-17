function setCookie(key, value) {
    document.cookie = key + "=" + value + "; path=/"
}

function getCookie(key) {
    let value = ""
    decodeURIComponent(document.cookie).split(";").forEach((v) => {
        let pair = v.split("=")
        if (pair[0] === key) {
            value = pair[1]
        }
    })
    return value
}
