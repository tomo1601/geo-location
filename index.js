const express = require('express')
const app = express();
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
require("dotenv").config()
const tinhThanhRouter = require('./routes/TinhThanhRouter')

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "Web tuyển dụng API"
        },
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [
            {
                BearerAuth: []
            }
        ],
        servers: [
            {
                url: "http://localhost:5000"
            }
        ],
    },
    apis:["./routes/*.js"]
} 


const specs = swaggerJsDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.use(cors())
app.use(express.json());

app.use('/api/tinhthanh', tinhThanhRouter)


app.listen(5000, () => {
    console.log('Server is running..');
    console.log('Server listening on PORT 5000');
});
