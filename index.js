require('dotenv').config();
require('express-async-errors');

const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const express = require('express')
const app = express();
const swaggerUI=require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDoc = yaml.load('./swagger.yaml');
const connectDb = require('./db/connect');
const authenticateUser = require('./middleware/authentication')
const authRouter= require('./routes/auth');
const jobsRouter = require('./routes/jobs');
const notFoundMiddleware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const path = require('path');


app.set('trustProxy', 1)
app.use(
    rateLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())

// app.get('/', (req,res) => {
//     res.send('<h1> Jobs Api</h1> <a href="/api-docs">Docs</a>');
// })

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const port = process.env.PORT || 3000;

const connect = async () =>{
    try{
        await connectDb(process.env.MONGO_URI);
        app.listen(port, ()=>
        console.log(`Server is listening on port ${port}`));
    }
    catch (error){
        console.log(error)
    }
}
connect();

// module.exports.handler =serverless(app);