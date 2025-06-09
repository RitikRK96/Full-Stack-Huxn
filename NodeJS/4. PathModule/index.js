import path from "path"

console.log(path.basename("c:\\Full-Stack Huxn\\NodeJS\\index.js", ".js"));
console.log(path.dirname("c:\\Full-Stack Huxn\\NodeJS\\index.js"));
console.log(path.extname("c:\\Full-Stack Huxn\\NodeJS\\index.js"));
console.log(path.join("c:","Full-Stack-Huxn","NodeJS", "ReduxToolkit"));
console.log(path.join("c:","Full-Stack-Huxn","NodeJS", "ReduxToolkit", ".."));
console.log(path.normalize("c:\\Full-Stack Huxn\\\NodeJS\\\\\index.js"));
console.log(path.parse("c:\\Full-Stack Huxn\\NodeJS\\index.js"));
console.log(path.parse("c:\\Full-Stack Huxn\\NodeJS\\index.js").base);
