import { CanMatch, CanMatchFn, RedirectCommand, Router } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { childRoutes } from "./users/users.routes";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess < 0.5){
        return true;
    }
    return new RedirectCommand(router.parseUrl('unauthorized'));
}

export const routes = [
    {
        path: '', // <your-domain>/
        component: NoTaskComponent,
        title: 'No task selected'
    },
    // {
    //     path: 'tasks', // <your-domain>/tasks
    //     component: TaskComponent,
    // },
    {
        path: 'users/:userId', // <your-domain>/users/<userId>
        component: UserTasksComponent,
        children: childRoutes,
        // canMatch: [dummyCanMatch],
        data: {
            message: 'hello!'
        },
        resolve: {
            userName: resolveUserName 
        },
        title: resolveTitle
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]