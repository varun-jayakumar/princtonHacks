import app from './api/app.js';

const port = 5006;
// servers starting at given port
app.listen(port);
console.log(`app running at port ${port}`);