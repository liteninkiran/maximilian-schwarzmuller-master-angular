import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  standalone: false,
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}
  results = this.investmentService.resultsData.asReadonly();
}
