import express from "express";
import cors from "./cors.js";
import morgan from "morgan";

const App = express();

App.use(cors);
App.use(morgan("dev"));

export default App;
