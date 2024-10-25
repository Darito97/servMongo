import App from "./app.js";
import Connect from "./database/mongo.js";

App.listen(3000, () => {
  Connect();
  console.log("Server is running on port 3000");
});
