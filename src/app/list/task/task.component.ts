import { Component, OnInit } from '@angular/core';
import {Task} from 'src/app/interface/task';
import {TaskService} from '../../service/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  task: Task = {};

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {}

  logForm() {
    this.taskService.addTask(this.task);
    console.log(this.task);
    this.router.navigate(["list"]);
  }
}
