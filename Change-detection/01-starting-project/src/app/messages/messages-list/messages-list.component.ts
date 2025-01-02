import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, Inject, inject, input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  // imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  // messages = input.required<string[]>();
  private messageService = inject(MessagesService);
  // private cdRef  = Inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef);
  messages = this.messageService.allMessages;

  // get messages() {
  //   return this.messageService.allMessages;
  // }

  // messages: string[] = [];

  // ngOnInit() {
  //   const subscription = this.messageService.messages$.subscribe((messages) => {
  //     this.messages = messages;
  //     this.cdRef.markForCheck();
  //   })
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   })
  // }

  // messages$ = this.messageService.messages$;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
