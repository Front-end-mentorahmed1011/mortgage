let btn = document.getElementById("submit");
let Mortgage = document.getElementById("calc");
let Terms = document.getElementById("Terms");
let interestRate = document.getElementById("interestRate");
let clear = document.getElementById("clear");
let interestAmountSpan = document.getElementById("interest");
let TotalAmountSpan = document.getElementById("total");
let empty = document.getElementById("emptyResultPage");
let calculated = document.getElementById("ful-filledResultPage");
let Radio1 = document.getElementById("firstOption");
let Radio2 = document.getElementById("SecondOption");
let TotalHead = document.getElementById('TotalHead')
 

let result;
let TotalAmount;
const interestAmount = (P, I, N) => {
    I = I / 100 / 12; // Convert annual interest rate to monthly and percentage to decimal
    N = N * 12; // Convert years to months

    result = P * (I * Math.pow((1 + I), N)) / (Math.pow((1 + I), N) - 1);
    return result;
}

// Corrected total repayment calculation function
const TotalRepayment = (monthlyPayment, termInYears) => {
    TotalAmount = monthlyPayment * termInYears * 12; // Total repayment over the term
    return TotalAmount;
}

btn.addEventListener('click', () => {
    if (Mortgage.value == '' || interestRate.value == '' || Terms.value == '' || (Radio1.checked == false && Radio2.checked == false)) {
        return 0;
    } else { 
        let monthlyPayment = interestAmount(Number(Mortgage.value), Number(interestRate.value), Number(Terms.value));
        interestAmountSpan.innerText = monthlyPayment.toFixed(2); // Show the monthly payment

        empty.classList.remove('active');
        calculated.classList.add('active');
        TotalAmountSpan.innerText = '';
        TotalHead.classList.add('d-none');


        if (Radio1.checked == true) {
            let totalRepayment = TotalRepayment(monthlyPayment, Number(Terms.value));
            TotalAmountSpan.innerText = totalRepayment.toFixed(2); // Show the total repayment
            TotalHead.classList.remove('d-none');
        }
    }
})

clear.addEventListener('click' , ()=> {
    Mortgage.value = null;
    Terms.value = null;
    interestRate.value = null;
    empty.classList.add('active');
    calculated.classList.remove('active');
})