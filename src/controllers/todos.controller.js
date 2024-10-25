import Todo from "../models/todos.js";

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = req.body;
    const newTodo = new Todo({
      ...todo,
    });
    await newTodo.save();
    res.status(201).send();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, done } = req.body;
    if (!id) {
      return res.status(400).json({ msg: "Id is required" });
    } else {
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { title, done },
        { new: false }
      );
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "Id is required" });
    } else {
      await Todo.findByIdAndDelete(id);
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "Id is required" });
    } else {
      const todo = await Todo.findById(id);
      res.status(200).json(todo);
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export { getAllTodos, createTodo, updateTodo, deleteTodo, getTodo };
