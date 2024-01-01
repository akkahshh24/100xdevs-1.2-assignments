const express = require('express');
const { todo } = require() './db';
import { createTodoSchema, updateTodoSchema } from './types';
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", async (req, res) => {
    const parsedPayload = createTodoSchema.safeParse(req.body);
    if (!parsedPayload.success) {
        res.status(411).json({
            status: "error",
            message: "Invalid inputs."
        });
        return;
    }

    await todo.create({
        title: parsedPayload.title,
        description: parsedPayload.description,
        completed: false
    });

    res.status(201).json({
        status: "success",
        message: "Todo created successfully."
    });
});

app.get("/todos", async (req, res) => {
    const todos = await todo.find();
    
    res.status(200).json({
        todos: response
    });
});

app.put("/completed", async (req, res) => {
    const parsedPayload = updateTodoSchema.safeParse(req.body);
    if (!parsedPayload.success) {
        res.status(411).json({
            status: "error",
            message: "Invalid inputs."
        });
        return;
    }

    await todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    });

    res.status(200).json({
        status: "success",
        message: "Todo marked as completed."
    });
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});

