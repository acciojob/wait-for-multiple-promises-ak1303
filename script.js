let output = document.getElementById('output');
let trDefault = document.createElement('tr');
trDefault.id='loading';
trDefault.innerHTML = `<td colspan="2">Loading...</td>`;
output.append(trDefault);

let total = 0;
function task(promise) {
	return new Promise((resolve, reject) => {
	    let delay = (Math.random()*2)+1;
	    total += delay;
	    setTimeout(() => {
	        resolve({ promise: promise, delay: delay }); 
	    }, delay * 1000);
	});
}
let promise1 =task('Promise 1');
let promise2 =task('Promise 2');
let promise3 =task('Promise 3');

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
