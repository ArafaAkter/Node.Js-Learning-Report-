const os = require("os");
console.log(os.userInfo());


// path module
const path = require("path");

const extensionName = path.extname("index.html");
console.log(extensionName);