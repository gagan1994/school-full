
const isValidUrl=(string)=> {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        console.log("url validation false string:"+string);
        return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

export default isValidUrl;
