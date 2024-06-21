import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
    selector: 'app-tasks',
    // standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    // imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  // @Input() name?: string;
  // @Input() name: string | undefined;
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  isTaskAdded = false;
  // tasks = dummyTasks;
  // private tasksService = new TasksService();

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    // return this.tasks.filter((task) => task.userId === this.id);
    return this.tasksService.getUserTasks(this.id);
  }

  // onTaskCompleted(userId: string) {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  //   this.tasksService.removeTask(userId);
  // }

  isNewTaskAdded(){
    this.isTaskAdded = true;
  }

  isCancelAddTask(){
    this.isTaskAdded = false;
  }

  // onAddTask(taskData: NewTaskData){
  //   this.tasks.push({
  //     id: new Date().getTime().toString(),
  //     userId: this.id,
  //     title: taskData.title,
  //     summary: taskData.summary,
  //     dueDate: taskData.date
  //   })
  //   this.isTaskAdded = false;
  // }
}
