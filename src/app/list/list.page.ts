import {Component, OnInit} from '@angular/core';
import {Task} from '../interface/task';
import {MEETING} from './const/tasktype';
import {TaskService} from '../service/task.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    tasks: Task[] = [];

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.taskService.initTestTasks();
    }

    checkPendingItem(Id: any) {

    }

    addNewTask() {

    }

    favorite(item: any) {
        
    }

    share(item: any) {
        
    }

    unread(item: any) {
        
    }
}
