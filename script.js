function calculateLoan() {
  let loanAmountValue = document.getElementById("loan-amount").value;
  let interestRateValue = document.getElementById("interest-rate").value;
  let MonthsToPayValue = document.getElementById("months-to-pay").value;

  let interest =
    (loanAmountValue * interestRateValue * 0.01) / MonthsToPayValue;

    monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2); //only 2 decimal places

    document.getElementById("payment").innerHTML = `Monthly Payment: $${monthlyPayment}`;
}


window.onload = calculateLoan; //When the page loads, automatically run the calculateLoan() function.