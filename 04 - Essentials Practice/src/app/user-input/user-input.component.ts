import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

const enteredInitialInvestment = '1000';
const enteredAnnualInvestment = '50';
const enteredExpectedReturn = '5';
const enteredDuration = '10';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone: true,
  imports: [FormsModule],
})
export class UserInputComponent {
  enteredInitialInvestment = signal(enteredInitialInvestment);
  enteredAnnualInvestment = signal(enteredAnnualInvestment);
  enteredExpectedReturn = signal(enteredExpectedReturn);
  enteredDuration = signal(enteredDuration);

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateProjection(this.getData());
    this.resetForm();
  }

  private getData() {
    return {
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    };
  }

  private resetForm() {
    this.enteredInitialInvestment.set(enteredInitialInvestment);
    this.enteredAnnualInvestment.set(enteredAnnualInvestment);
    this.enteredExpectedReturn.set(enteredExpectedReturn);
    this.enteredDuration.set(enteredDuration);
  }
}
