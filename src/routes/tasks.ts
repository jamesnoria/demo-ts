import { Router, Request, Response } from "express";

const router = Router();

import Task from "../models/Task";

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.send("received");
  })
  .post(async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    console.log(newTask);
    res.send("Saved");
  });

router.route("/list").get(async (req: Request, res: Response) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.send(tasks);
});

router.route("/delete/:id").delete(async (req: Request, res: Response) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/tasks/list");
});

router
  .route("/edit/:id")
  .get(async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    console.log(task);
    res.send(task);
  })
  .patch(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const task = await Task.findByIdAndUpdate(id, { title, description });
    console.log(task);
    res.redirect("/tasks/list");
  });

export default router;
