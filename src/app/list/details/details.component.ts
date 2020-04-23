import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../../service/task.service';
import {Task} from '../../interface/task';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  constructor(    private route: ActivatedRoute, private taskService: TaskService) { }

  task: Task = {};

  ngOnInit() {
    const title: string = this.route.snapshot.paramMap.get('title');
    console.log(title)
    this.task = this.taskService.getTaskByTitle(title);
  }

  delete(item: any) {
    this.taskService.deleteTask(this.task.title);
  }
}
