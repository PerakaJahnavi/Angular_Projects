import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})
export class UserTasksComponent{
  // userId = input.required<string>();
  // userName = '';
  userName = input.required<string>();
  message = input.required<string>();
  // private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // userName = computed(() => this.userService.users.find(u => u.id === this.userId())?.name);

  // ngOnInit(): void {
  //   console.log('Input data: ' + this.message());
  //   console.log(this.activatedRoute);
  //   // console.log(this.activatedRoute.snapshot.paramMap.get('userId')); 
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       this.userName = this.userService.users.find((u => u.id === paramMap.get('userId')))?.name || '';
  //     }
  //   });

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }

  // ngOnInit(): void {
  //     this.activatedRoute.data.subscribe({
  //       next: data => {
  //         console.log(data);
  //       }
  //     })
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName = 
  userService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute, routerState
) => {
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks';
}
