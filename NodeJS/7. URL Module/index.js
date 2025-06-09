import {URL} from "url";

const myURL = new URL("https://www.URL_ADDRESS.org:8080/hello/world?query=string#hashed");
console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.href);
console.log(myURL.pathname);
console.log(myURL.port);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);
// console.log(myURL.username);
// console.log(myURL.password);
console.log(myURL.origin)
