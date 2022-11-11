//SIGN IN BUTTON HANDLER
const chosenBtn = document.getElementById('signIn');
chosenBtn.addEventListener("click", function(){
    const parent = document.getElementById("grandparentMain");
    parent.style.display = "none";
    const loginArea = document.getElementById("grandparent");
    loginArea.style.display = "block";
})

//SIGNUP BUTTON HANDLER
const signUpBtn = document.getElementById('signUp');
signUpBtn.addEventListener("click", function(){
    const parent = document.getElementById("grandparentMain");
    parent.style.display = "none";
    const registerArea = document.getElementById("grandparent-register");
    registerArea.style.display = "block";
})

//LOGIN BUTTON HANDLER
const loginBtn = document.getElementById("login-button");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("grandparent");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//REGISTER BUTTON HANDLER
const registerBtn =document.getElementById("registerButton");
registerBtn.addEventListener("click", function(){
    const registerArea = document.getElementById("grandparent-register");
    registerArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";

})

// ADD DEPOSIT BUTTON HANDLER
const addDepositBtn = document.getElementById("addDeposit");
addDepositBtn.addEventListener("click", function(){
    const inputDepositValue = addInputNumber("inputDeposit");

    // const inputDeposit = document.getElementById("inputDeposit").value;
    // const inputDepositNumber = parseFloat(inputDeposit);

    // const depositMoney = document.getElementById("deposit-money").innerText;
    // const depositMoneyNumber = parseFloat(depositMoney);
    // const totalDeposit = inputDepositNumber + depositMoneyNumber;
    // document.getElementById("deposit-money").innerText = totalDeposit;

    updateNumber ("deposit-money", inputDepositValue);
    updateNumber ("balance-money", inputDepositValue);
    document.getElementById("inputDeposit").value = "";
})


// ADD WITHDRAW BUTTON HANDLER
const addWithdrawBtn = document.getElementById("addWithdraw");
addWithdrawBtn.addEventListener("click", function (){
    const inputWithdrawValue = addInputNumber("inputWithdraw");
    updateNumber ("withdraw-money", inputWithdrawValue);
    updateNumber ("balance-money", -1*inputWithdrawValue);
    document.getElementById("inputWithdraw").value = "";
})


//INPUT MONEY  FUNCTION
function addInputNumber(id) {
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}

//CALCULATE AND UPDATE MONEY FUNCTION
function updateNumber(id, inputDepositValue) {
    const money = document.getElementById(id).innerText;
    const moneyNumber = parseFloat(money);
    const totalMoney = inputDepositValue + moneyNumber;
    document.getElementById(id).innerText = totalMoney;
}