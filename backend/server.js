const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5001;

const TODO_FILE = path.join(__dirname, "todo.json");

app.use(cors());
app.use(express.json());

function gettasks() {
  try {
    if (!fs.existsSync(TODO_FILE)) return [];

    const data = fs.readFileSync(TODO_FILE, "utf-8");
    if (!data.trim()) return [];

    return JSON.parse(data);
  } catch (err) {
    console.warn("Couldn't read todo file:", err.message);
    return [];
  }
}

function savelist(todos) {
  try {
    fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
    return true;
  } catch (err) {
    console.error("Error writing todos:", err.message);
    return false;
  }
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function checktodo(req, res, next) {
  const { title } = req.body;

  if (req.method === "POST" || req.method === "PUT") {
    if (!title || !title.trim()) {
      return res.status(400).json({ error: "Title is required" });
    }

    if (title.trim().length > 100) {
      return res.status(400).json({ error: "Title is too long" });
    }
  }

  next();
}

app.get("/todolist", (req, res) => {
  const todos = gettasks();
  res.json({
    ok: true,
    todos,
    total: todos.length,
  });
});

app.post("/todolist", checktodo, (req, res) => {
  const { title, description = "", completed = false } = req.body;

  const newTodo = {
    id: makeId(),
    title: title.trim(),
    description: description.trim(),
    completed: Boolean(completed),
  };

  const todos = gettasks();
  todos.push(newTodo);

  if (!savelist(todos)) {
    return res.status(500).json({ error: "Couldn't save new todo" });
  }

  res.status(201).json({ ok: true, todo: newTodo });
});

app.put("/todolist/:id", checktodo, (req, res) => {
  const { id } = req.params;
  const todos = gettasks();
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const item = todos[index];
  item.title = req.body.title?.trim() || item.title;
  if (req.body.description !== undefined) {
    item.description = req.body.description.trim();
  }
  if (req.body.completed !== undefined) {
    item.completed = Boolean(req.body.completed);
  }
  item.updatedAt = new Date().toISOString();

  if (!savelist(todos)) {
    return res.status(500).json({ error: "Couldn't update todo" });
  }

  res.json({ ok: true, todo: item });
});

app.delete("/todolist/:id", (req, res) => {
  const { id } = req.params;
  const todos = gettasks();
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const removed = todos.splice(index, 1)[0];

  if (!savelist(todos)) {
    return res.status(500).json({ error: "Couldn't delete todo" });
  }

  res.json({ ok: true, deleted: removed });
});

app.get("/", (req, res) => {
  res.json({
    message: "api running",
    routes: [
      "GET    /todolist",
      "POST   /todolist",
      "PUT    /todolist/:id",
      "DELETE /todolist/:id",
    ],
  });
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
