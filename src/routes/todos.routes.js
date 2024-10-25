import { Router } from "express";

import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} from "../controllers/todos.controller.js";

const todoRouter = Router();

todoRouter.get("/", getAllTodos);
todoRouter.post("/", createTodo);
todoRouter.put("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);
todoRouter.get("/:id", getTodo);

export default todoRouter;
