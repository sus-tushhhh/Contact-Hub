const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const env = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.Port || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoute"));
app.use("/api/user", require("./routes/userRoute"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started, Port: ${port}`);
});
