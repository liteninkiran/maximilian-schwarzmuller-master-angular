import { Component, input } from '@angular/core';
import { AnnualData } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  standalone: true,
  imports: [CurrencyPipe],
})
export class InvestmentResultsComponent {
  results = input<AnnualData[]>();
}
