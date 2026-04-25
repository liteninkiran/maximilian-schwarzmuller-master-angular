import { Component, input } from '@angular/core';
import { AnnualData } from '../investment-input.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  standalone: true,
  imports: [],
})
export class InvestmentResultsComponent {
  results = input<AnnualData[]>();
}
