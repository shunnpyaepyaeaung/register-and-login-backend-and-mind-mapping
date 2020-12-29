const express = require('express');
const app = express();
const userRoute = require('./route/userRoute');

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/user', userRoute)

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> console.log(`Server is listening on PORT ${PORT}`))

