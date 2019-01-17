
const url = 'http://18.217.255.16:8080/api';


export function getWord () {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    return fetch(url + "/picture/random_word", {headers: headers})
        // .then(result => JSON.parse(result));
        .then(response => response.text())
}

export function getPictureClass(pictureBase64) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    return fetch(`${url}/picture/get_class`, {
        headers: headers,
        method: "POST",
        body: JSON.stringify({
            word: "undef",
            encodedData: pictureBase64,
        })
    })
    .then(response => response.text());
}
export function sendPicture(picClass, pictureBase64) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    return fetch(`${url}/picture/class/${picClass}`, {
        headers: headers,
        method: "POST",
        body: JSON.stringify({
            word: picClass,
            encodedData: pictureBase64,
        })
    })
    .then(response => response.text());
}

export function register (login, password) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    console.log(login, password);
    return fetch(url + "/user/register", 
    {
        method: "POST",
        headers: headers,
        body: JSON.stringify( {
            login: login,
            password: password,
            isBanned: false
        })
    })
        // .then(result => JSON.parse(result));
        .then(response => response.json())
        .then(response => console.log(response))
}