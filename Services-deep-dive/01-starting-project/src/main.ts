import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TasksService } from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
// bootstrapApplication(AppComponent, {
//     providers: [TasksService]
// }).catch((err) => console.error(err));

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');
bootstrapApplication(AppComponent, {
    providers: [{provide: TasksServiceToken, useClass: TasksService}],
}).catch((err) => console.error(err));
