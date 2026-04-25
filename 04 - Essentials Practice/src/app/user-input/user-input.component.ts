import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

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
  calculate = output<InvestmentInput>();

  enteredInitialInvestment = signal(enteredInitialInvestment);
  enteredAnnualInvestment = signal(enteredAnnualInvestment);
  enteredExpectedReturn = signal(enteredExpectedReturn);
  enteredDuration = signal(enteredDuration);

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredInitialInvestment.set(enteredInitialInvestment);
    this.enteredAnnualInvestment.set(enteredAnnualInvestment);
    this.enteredExpectedReturn.set(enteredExpectedReturn);
    this.enteredDuration.set(enteredDuration);
  }
}
