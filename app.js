var accountList = [];

function createAccount(accountObj) {
    accountList.push(accountObj);
    return accountObj;
}

function deposit(username, amount) {
    accountList.forEach(function (account) {
        if (account.username === username) {
            account.balance += amount;
        }
    })
}

function withdraw(username, amount) {
    accountList.forEach(function (account) {
        if (account.username === username) {
            account.balance -= amount;
        }
    })
}

function showAccount(username) {
    accountList.forEach(function (account) {
        if (account.username === username) {
            console.log('User Name: ' + account.username + '\n' + 'Balance: ' + account.balance)
        }
    })
}

var natarajAccount = createAccount({username:'Nataraj', balance:1000});
var sanahAccount = createAccount({username:'Sanah', balance:2000});

deposit('Nataraj', 1000);
withdraw('Nataraj', 100);
showAccount('Nataraj');
deposit('Sanah', 3000);
showAccount('Sanah');

