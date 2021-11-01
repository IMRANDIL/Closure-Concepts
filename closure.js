// closure concepts..............





function bank(name, initialbalance) {
    let amount = initialbalance;
    function showBal() {
        console.log(`Hey ${name}, Your balance is: ${amount}`);
    }

    function deposit(remit) {
        amount += remit;
        showBal();
    }


    function withdraw(withdrawl) {
        if (withdrawl > amount) {
            console.log(`Sorry, You have not enough fund. `);
            showBal()
            return;
        }
        amount -= withdrawl;
        showBal();
    }


    return { showBal: showBal, deposit: deposit, withdraw: withdraw }



}



const Ali = bank('Adil', 1000);

Ali.withdraw(500)
