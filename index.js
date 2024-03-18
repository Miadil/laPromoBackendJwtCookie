require("dotenv").config();
const app = require("./src/app");

const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server address : http://localhost:${port}`);
  }
});
