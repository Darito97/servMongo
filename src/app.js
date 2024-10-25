import express from "express";
import cors from "./cors.js";
import morgan from "morgan";
import dotenv from "dotenv";

/*Routers */
import todoRouter from "./routes/todos.routes.js";

dotenv.config();
const App = express();

App.use(cors);
App.use(morgan("dev"));
App.use(express.json());
App.use("/todos", todoRouter);

export default App;
