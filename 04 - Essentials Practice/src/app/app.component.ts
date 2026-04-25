import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput, AnnualData } from './investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  resultsData?: AnnualData[];

  calculate(data: InvestmentInput) {
    this.resultsData = this.calculateInvestmentResults(data);
  }

  calculateInvestmentResults(data: InvestmentInput) {
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
