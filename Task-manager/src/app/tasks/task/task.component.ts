import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe } from '@angular/common';
import { dummyTasks } from '../../dummy-tasks';
import { CardComponent } from "../../shared/card/card.component";
import { TasksComponent } from '../tasks.component';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    // standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    // imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({required : true}) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompleteTask(){
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
