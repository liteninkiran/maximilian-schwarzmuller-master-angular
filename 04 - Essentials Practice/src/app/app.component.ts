import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormData } from './user-input/user-input.component';

export type AnnualData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalInvested: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  onCalculateInvestmentResults(data: FormData) {
    const investments = this.calculateInvestmentResults(data);
    console.log(investments);
  }

  calculateInvestmentResults(data: FormData) {
    const {
      initialInvestment: initial,
      annualInvestment: annual,
      expectedReturn: expected,
      duration,
    } = data;
    const annualData: AnnualData[] = [];
    let valueEndOfYear = initial;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interest = valueEndOfYear * (expected / 100);
      valueEndOfYear += interest + annual;
      const totalInterest = valueEndOfYear - annual * year - initial;
      const totalInvested = initial + annual * year;
      const yearData = {
        year,
        interest,
        valueEndOfYear,
        annualInvestment: annual,
        totalInterest,
        totalInvested,
      };
      annualData.push(yearData);
    }

    return annualData;
  }
}
