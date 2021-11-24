const express = require('express');
// const cors = require('cors');
const users = require('./controller/users');
// const all = require('./controller/all');

const app = express();

// const corsOptions = { 
//     origin: 'http://localhost:3000'
// };

// app.use(cors(corsOptions));

app.use(express.static('../frontend/build'));

app.use('/', users);
// app.use('/all', all);

app.listen(4000);
