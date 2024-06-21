import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentSerivce } from '../investment.service';

// interface InvestmentInput {
//   initialInvestment: number;
//   annualInvestment: number;
//   expectedReturn: number;
//   duration: number
// }

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // calculate = output<InvestmentInput>();
  // initialInvestment = '0';
  // annualInvestment = '0';
  // expectedReturn = '5';
  // duration = '10';
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentSerivce) {}
  
  onSubmit() {
    // console.log('SUBMITTED');
    this.investmentService.onCalculateInvestmentResults({initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    });
    // this.calculate.emit({
    //   // initialInvestment: +this.initialInvestment,
    //   // annualInvestment: +this.annualInvestment,
    //   // expectedReturn: +this.expectedReturn,
    //   // duration: +this.duration
    //   initialInvestment: +this.initialInvestment(),
    //   annualInvestment: +this.annualInvestment(),
    //   expectedReturn: +this.expectedReturn(),
    //   duration: +this.duration()
    // });
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }

}
