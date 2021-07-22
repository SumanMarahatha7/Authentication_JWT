const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

// Connect DataBase
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(() => console.log("Mongo DB Connected"))
.catch((err) => console.log(err));

app.use(cors());

app.use(express.json());

app.use('/api/auth', require("./routes/user"));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("Server is running"));
