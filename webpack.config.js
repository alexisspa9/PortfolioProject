const path = require("path");

module.exports = {
    entry: "./app/assets/scripts/App.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./app/dist/scripts"),
        filename: "main.js"
    }
}