const express = require('express');

const routes = require('./routes');
const app = express();

require('./config/express')(app);
require('./config/mongoose')(app);

app.use(routes);

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}...`));