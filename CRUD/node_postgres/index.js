const express = require('express');
const  cors = require('cors');
const personRouter = require("./routes/person.routes")

const PORT = process.env.PORT || 6543;
const app = express();
app.use(express.json())
app.use(cors());



app.use('/api/person', personRouter)

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))
