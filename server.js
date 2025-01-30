const  express = require("express");
const cors = require("cors");
const router = require("./Router/movieRouter")

const connection = require("./database/dbconnect");

const port = 4455;
const app = express();
app.use(express.json());
app.use(cors({origin: "*"}))
app.use(router)



app.listen(port, () => {
    connection()
    console.log(`server is runing on port: ${port}`);
    
})