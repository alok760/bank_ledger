function Sanitize(data) {

    // debugger
    data = removeDuplicates(data);
    data = correctChronology(data);
    data = correctOrder(data);

    return data;
}

// Remove duplicate transactions based on activity id
function removeDuplicates(data) {
    return data.filter((v, i, a) =>
        a.findIndex(v2 => (v2.activity_id === v.activity_id)) === i
    );
}

// Sort by datetime
function correctChronology(data) {
    data.sort(function (a, b) {
        var keyA = new Date(a.date),
            keyB = new Date(b.date);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    return data;
}

// when the transaction datetime is the same, we rearrange the transactions in the order
// in which balance and amount is mathematically correct.
function correctOrder(data) {
    data.sort(function (a, b) {
        var keyA = new Date(a.date),
            keyB = new Date(b.date);
        
        if (keyA.getTime() !== keyB.getTime()) return 0;
        
        if (a.balance + b.amount === b.balance) return -1;
        // if current balance is the sum of previos balance and current amount, then the current transaction should come after next.
        if (b.balance + a.amount === a.balance) return 1;
        return 0;
    });
    return data;
}

export default Sanitize;