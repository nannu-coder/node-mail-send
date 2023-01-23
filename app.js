require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./DB/ConnectDB");
const app = express();

//Path
const notFound = require("./Middleware/Not-Found");
const errorHandler = require("./Middleware/ErrorHandler");
const sendMail = require("./Routes/sendMailRoute");

//use Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Send MAil</h1> <a href='/send'>Send</a>");
});

app.use("/", sendMail);

//error handler
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startDB();
