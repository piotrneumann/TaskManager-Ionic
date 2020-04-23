import { Injectable } from '@angular/core';
import {Task} from '../interface/task';
import {MAIL, MEETING, SHOP, WORK} from '../list/const/tasktype';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];

  constructor() { }

  init() {
    this.tasks = [];
  }

  initTestTasks() {
    this.init();
    for (let i = 0; i < 5; i++) {
      const task: Task = {id: i, title: 'title', description: 'desc', icon: MEETING, status: false};
      console.log();
      this.tasks.push(task);
    }
    console.log(this.tasks);
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  addMeeting(task: Task) {
    task.icon = MEETING;
    this.tasks.push(task);
  }

  addWork(task: Task) {
    task.icon = WORK;
    this.tasks.push(task);
  }

  addShop(task: Task) {
    task.icon = SHOP;
    this.tasks.push(task);
  }

  addMail(task: Task) {
    task.icon = MAIL;
    this.tasks.push(task);
  }

  deleteTask(title: string) {
    this.tasks = this.tasks.filter(obj => obj.title !== title);
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  setStatus(title: string) {
    this.tasks.find(task => task.title === title).status = true;
  }

  getTaskByTitle(title: string) {
    return this.tasks.find(task => task.title === title);
  }
}
