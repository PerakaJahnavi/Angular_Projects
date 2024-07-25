import { Component, Input, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // @Input({}) ...
  data = input.required<Ticket>();
  // data = input.required<Ticket>({alias: 'ticket'});
  // data = input.required<Ticket>({transform: (value) => });
  close = output();
  // close = output({alias: 'closeTicket'});
  // close = output({'closeTicket'});
  datailsVisible = signal(false);

  onToggleDetails() {
    // this.datailsVisible.set(!this.datailsVisible());
    this.datailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
