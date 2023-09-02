// used this for help https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express
// and this https://www.techiediaries.com/express-sendfile-serve-static-files/
// and this https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
// https://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed
// se here for solution without static https://github.com/mattegan111/basic-node-site/blob/main/index.js

const express = require("express");
const app = express();
const port = 3000;
 /* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.use(express.static('public'));
// index.html auto served at / from above

app.get("/about", (req, res) => {
    res.sendFile('public/about.html', { root: __dirname });
});

app.get("/contact-me", (req, res) => {
    res.sendFile('public/contact-me.html', { root: __dirname });
});

app.get('*', function(req, res){
    res.sendFile('public/404.html', { root: __dirname });
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});