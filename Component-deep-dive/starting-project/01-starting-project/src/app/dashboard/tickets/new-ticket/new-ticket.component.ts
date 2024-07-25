import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, output, viewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent implements OnInit, AfterViewInit{
        
    @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
    enteredTitle = '';
    enteredText = '';
    // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //signal which is support Angular 17.5
    // @Output() add = new EventEmitter<{title: string; text: string}>();
    add = output<{title: string; text: string}>();


    ngOnInit(){
        console.log('ONINIT!');
        console.log(this.form?.nativeElement);
    }

    ngAfterViewInit(){
        console.log('AFTER VIEW INIT!');
        console.log(this.form?.nativeElement);
    }
    // onSubmit(titleElement: HTMLInputElement) {
    //     console.dir(titleElement);
    //     console.log(titleElement.name);
    // }

    // onSubmit(title: string, text: string, form: HTMLFormElement) {
    //     console.log(title, text);
    //     form.reset();
    // }

    // onSubmit(title: string, text: string) {
    //     console.log(title, text);
    //     this.form?.nativeElement.reset();
    //     // this.form()?.nativeElement.reset();
    //     this.add.emit({title: title, text: text});
    // }

    onSubmit() {
        console.log(this.enteredTitle, this.enteredText);
        this.add.emit({title: this.enteredTitle, text: this.enteredText});
        this.enteredTitle = '';
        this.enteredText = '';
        // this.form?.nativeElement.reset();
        // this.form()?.nativeElement.reset();   
    }


}
