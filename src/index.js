import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';

const routerHome = require('./routes/home');
const routerUser = require('./routes/user');
const routerTeacher = require('./routes/teacher');

const app = express();
app.use(cors());
app.use(cookieParser())
app.use(express.json());


app.use('/', routerHome);
app.use('/users', routerUser);
app.use('/teachers', routerTeacher);

app.listen(
    process.env.PORT,
    () => console.log(`Listening on port ${process.env.PORT}!`)
)
