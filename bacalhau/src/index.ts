import fs from 'fs';

const executeDueDiligende = async () => {
    try {
        const jsonString = fs.readFileSync("./inputs/transactions-history.json");
        const transactions = JSON.parse(jsonString.toString());
        let debts = 0
        let collateral = 0

        for (const transaction of transactions) {
            if (transaction.transactionAmount.amount > 0) {
                collateral += Number(transaction.transactionAmount.amount)
            } else if (transaction.transactionAmount.amount < 0) {
                debts += Number(transaction.transactionAmount.amount)
            }
        }

        console.log({ debts })
        console.log({ collateral })

        return { debts, collateral }

    } catch (err) {
        console.log(err);
        return;
    }
}

(async () => {
    const { debts, collateral } = await executeDueDiligende()
    console.log({ debts })
    console.log({ collateral })
    let data = JSON.stringify({ debts, collateral });
    fs.writeFileSync('./outputs/result.json', data);
})()