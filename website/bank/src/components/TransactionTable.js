// Transaction Table is used to show list of Transactions in a User Readable Table format 
function TransactionTable(props) {
    const { transactionData } = props;

    function get_description(transaction) {
        return `${transaction.type} of ${Math.abs(transaction.amount)}
             ${transaction.source && transaction.source.description && "by " + transaction.source.description}
             ${transaction.destination && transaction.destination.description && "to " + transaction.destination.description}`;
    }

    function getTransactionTable() {
        return transactionData.map((transaction, index) => {
            return (
                <tr key={index}>
                    <td scope="row">{new Date(transaction.date).toGMTString().split(" GMT")[0]}</td>
                    <td>{transaction.type}</td>
                    <td>{get_description(transaction)}</td>
                    <td className={transaction.amount > 0 ? "text-success" : "text-danger"}>{transaction.amount}</td>
                    <td>{transaction.balance}</td>
                </tr>
            );
        });
    }
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Date(GMT)</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                {getTransactionTable()}
            </tbody>
        </table>
    )
}

export default TransactionTable;