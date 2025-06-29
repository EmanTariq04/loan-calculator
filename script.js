function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;
  interestRateValue = document.getElementById("interest-rate").value;
  MonthsToPayValue = document.getElementById("months-to-pay").value;

  interestToPayValue = loanAmountValue * interestRateValue * 0.01 / MonthsToPayValue;
}
