export type InvestmentInput = {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
};

export type AnnualData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalInvested: number;
};
