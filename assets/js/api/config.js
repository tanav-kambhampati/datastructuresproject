export var uri;
if (location.hostname === "localhost") {
        uri = "http://localhost:4100";
} else if (location.hostname === "127.0.0.1") {
        uri = "http://127.0.0.1:4100";
} else {
        uri = "https://jobly.stu.nighthawkcodingsociety.com/";
}

export const options = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
        'Content-Type': 'application/json',
    },
};