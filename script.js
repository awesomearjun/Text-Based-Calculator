document.querySelector('#submit').addEventListener('click', () => {
	let fir = document.querySelector('#fir').value;
	let sec = document.querySelector('#sec').value;
	let operator = document.querySelector('#operator').value;
	let what;
	if (isNaN(fir) || isNaN(sec)) {
		alert('Did you type in a number?');
	}

	switch (operator) {
		case '+':
			what = parseFloat(fir) + parseFloat(sec);
			document.querySelector('#ans').textContent = what.toLocaleString('en');
			break
		case '-':
			what = parseFloat(fir) - parseFloat(sec);
			document.querySelector('#ans').textContent = what.toLocaleString('en');
			break
		case '*':
			what = parseFloat(fir) * parseFloat(sec);
			document.querySelector('#ans').textContent = what.toLocaleString('en');
			break
		case '/':
			what = parseFloat(fir) / parseFloat(sec);
			document.querySelector('#ans').textContent = what.toLocaleString('en');
			break
	}
});