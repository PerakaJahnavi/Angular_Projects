import { Component, Input, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentSerivce } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // } []>();
  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[];

  private investmentService = inject(InvestmentSerivce);

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  results = computed(() => this.investmentService.resultsData());

  // results = this.investmentService.resultsData.asReadonly;

  
}
