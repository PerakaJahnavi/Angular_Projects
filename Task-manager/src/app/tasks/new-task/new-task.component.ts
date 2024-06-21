import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [ FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() cancel = new EventEmitter<boolean>();
  // @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummery = '';
  enteredDate = '';
  // enteredTitle = signal('');
  // enteredSummery = signal('');
  // enteredDate = signal('');
  private tasksService = inject(TasksService)

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummery,
    //   date: this.enteredDate
    // });
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummery,
      date: this.enteredDate,
    }, this.userId)
    this.cancel.emit();
  }
}
