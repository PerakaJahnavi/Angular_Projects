import { Component, EventEmitter, Input, Output, computed, input, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }



@Component({
    selector: 'app-user',
    // standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    // imports: [CardComponent]
})
export class UserComponent {
  //This value will be available in the template mentioned above
  // let/const selectedUser..
  // The below mentioned is public and if we want it to make private then we can write as
  // private selectedUser = ...
  
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // onSelectUser() {
  //   console.log("Clicked!");
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   // this.selectedUser = DUMMY_USERS[randomIndex];
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }

  @Input({required: true}) user!: User;
  @Input({required : true}) selected!: boolean;
  @Output() select = new EventEmitter();
  // @Output() select = new EventEmitter<string>();
  // select = output<string>();
  // get imagePath() {
  //   return 'assets/users/' + this.avatar
  // }

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  // onSelectUser(){
  //   this.select.emit(this.id);
  // }
  onSelectUser(){
    this.select.emit(this.user.id);
  }

  //avatar = input("AnyDefaultValue")
  // avatar = input<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
}
