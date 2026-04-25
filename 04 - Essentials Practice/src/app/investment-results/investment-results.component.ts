import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  standalone: true,
  imports: [CurrencyPipe],
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}
  // results = computed(() => this.investmentService.resultsData());
  results = this.investmentService.resultsData.asReadonly();
}
