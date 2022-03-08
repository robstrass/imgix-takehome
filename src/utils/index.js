export function encode(parameters, url) {
    let finalUrl = url + '?';
    for (let key in parameters) {
        let segment = encodeURIComponent(`${parameters[key]}`);
        finalUrl += `${key}=${segment}&`;
    }
    finalUrl = finalUrl.slice(0, finalUrl.length - 1);
    return finalUrl;
}
