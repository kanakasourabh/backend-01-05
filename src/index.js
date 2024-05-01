import { app } from "./app.js";
import { connectDb } from "./db/index.js";

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server connected");
    });
  })
  .catch((error) => {
    console.log(error);
  });
