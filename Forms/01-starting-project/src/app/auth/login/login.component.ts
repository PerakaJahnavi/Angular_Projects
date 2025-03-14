import { afterNextRender, Component, DestroyRef, inject, OnInit, viewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl){
  if(control.value.includes('?')) {
    return null;
  }

  return { doesNotContainQuestionMark: true};
}

function emailIsUnique(control: AbstractControl){
  if(control.value !== 'test@example.com') {
    return of(null);
  }

  return of({ notUnique : true});
}

let initialEmailValue = '';
const savedForm = window.localStorage.getItem('savewd-login-form');

if(savedForm){
  const loadedFormData = JSON.parse(savedForm);
  initialEmailValue = loadedFormData.email;
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {

  // Template-driven
  // private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  // constructor() {
  //   afterNextRender(() => {
  //     const savedForm = window.localStorage.getItem('savewd-login-form');

  //     if(savedForm){
  //       const loadedFormData = JSON.parse(savedForm);
  //       const savedEmail = loadedFormData.email;
  //       // this.form().setValue({
  //       //   email: savedEmail,
  //       //   password: ''
  //       // })
  //       setTimeout(() => {
  //         this.form().controls['emails'].setValue(savedEmail);
  //       }, 1);
  //     }
  //     const sunscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
  //       next: (value) => window.localStorage.setItem('saved-login-form', JSON.stringify({email: value.email}))
  //     });

  //     this.destroyRef.onDestroy(() => sunscription?.unsubscribe());
  //   });
  // }
  
  // onSubmit(formData: NgForm) {
  //   // console.log(formData);

  //   if(formData.form.invalid){
  //     return;
  //   }

  //   const enteredEmail = formData.form.value.email;
  //   const enteredPassword = formData.form.value.password;

  //   console.log(enteredEmail, enteredPassword);

  //   formData.form.reset();
  // }

  //Reactive-forms
  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators: [Validators.email, Validators.required],
      asyncValidators: [emailIsUnique]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark]
    })
  })

  get emailInvalid() {
    return this.form.controls.email.touched 
    && this.form.controls.email.dirty 
    && this.form.controls.email.invalid
  }

  get passwordInvalid() {
    return this.form.controls.password.touched 
    && this.form.controls.password.dirty 
    && this.form.controls.password.invalid
  }

  ngOnInit(): void {
    const savedForm = window.localStorage.getItem('savewd-login-form');

    if(savedForm){
      const loadedFormData = JSON.parse(savedForm);
      const savedEmail = loadedFormData.email;
      this.form.patchValue({
        email: savedEmail,
      })
    }
    const subscrption = this.form.valueChanges.pipe(debounceTime(500))
    .subscribe({
      next: (value) => {
        window.localStorage.setItem(
          'saved-login-form',
          JSON.stringify({email: value.email})
        );
      },
    });

    this.destroyRef.onDestroy(() => subscrption.unsubscribe());
  }

  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(enteredEmail, enteredPassword);
  }

}
