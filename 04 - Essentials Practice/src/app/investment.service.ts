import { Injectable, signal } from '@angular/core';
import {
  type AnnualData,
  type InvestmentInput,
} from './investment-input.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  resultsData = signal<AnnualData[] | undefined>(undefined);

  calculateProjection(data: InvestmentInput) {
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

    this.resultsData.set(annualData);
  }
}
