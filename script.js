let output = document.getElementById('output');
let trDefault = document.createElement('tr');
trDefault.innerHTML = `<td colspan="2">Loading...</td>`;
output.append(trDefault);

let total = 0;

let promise1 = new Promise((resolve, reject) => { 
    let delay = (Math.random()*2)+1;
    total += delay;
    setTimeout(() => {
        resolve({ promise: 'Promise1', delay: delay });
    }, delay * 1000);
});

let promise2 = new Promise((resolve, reject) => {
    let delay = (Math.random()*2)+1;
    total += delay;
    setTimeout(() => {
        resolve({ promise: 'Promise2', delay: delay });
    }, delay * 1000);
});

let promise3 = new Promise((resolve, reject) => {
    let delay = (Math.random()*2)+1;
    total += delay;
    setTimeout(() => {
        resolve({ promise: 'Promise3', delay: delay });
    }, delay * 1000);
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        output.removeChild(trDefault);
        values.forEach(value => {
            let tr = document.createElement('tr'); 
            tr.innerHTML = `
                <td>${value.promise}</td>
                <td>${value.delay.toFixed(3)}</td>`;
            output.appendChild(tr);
        });

        let totalRow = document.createElement('tr');
        totalRow.innerHTML = `
            <td>Total</td>
            <td>${total.toFixed(3)}</td>`;
        output.appendChild(totalRow);
    });
