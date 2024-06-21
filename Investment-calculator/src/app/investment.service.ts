import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";

@Injectable({providedIn: 'root'})
export class InvestmentSerivce {
    // resultsData?: {
    //     year: number,
    //     interest: number,
    //     valueEndOfYear: number,
    //     annualInvestment: number,
    //     totalInterest: number,
    //     totalAmountInvested: number
    // }[];

    resultsData = signal<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[] | undefined>(undefined);
    onCalculateInvestmentResults(userInput: InvestmentInput) {
        const {initialInvestment, annualInvestment, expectedReturn, duration} = userInput;
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
        // this.resultsData = annualData;
        this.resultsData.set(annualData);
        return annualData;
      }
}