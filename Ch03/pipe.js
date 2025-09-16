const fs = require("fs");

const readStream = fs.createReadStream("./lorem ipsum.txt", "utf-8");
const writeStream = fs.createWriteStream("./lorem ipnaemsae.txt");

readStream.pipe(writeStream);