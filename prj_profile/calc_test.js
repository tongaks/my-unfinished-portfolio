let menuIsOpen = false;
let unit = 'C';

window.onload = function() {
	var inputField = document.querySelector("#input-field");
	if (inputField) {
		inputField.focus();
	}
};

function Button(num) {
	let button = document.querySelector("#input-field");
	button.value += num;
}

function RemButton(button) {
	let value = document.querySelector("#input-field");
	value.value = value.value.slice(0, -1);
}

function Total() {
	let input = document.querySelector("#input-field").value;
	
	if ((/[a-zA-Z]/).test(input) == true) {
		alert("invalid input");
		document.querySelector("#input-field").value = "";
		return "";
	}

	let res = eval(input);
	
	if (isNaN(res)) {
		alert("invalid");
	} 

	document.querySelector("#input-field").value = res;
}

function ShowMenu() {
	let menu = document.querySelector('.selection');
	let items = document.querySelectorAll('.selection a');
	if (menuIsOpen) {
		menu.style.visibility = "hidden";
		menuIsOpen = false;
	} else {
		menu.style.visibility = "visible";
		menuIsOpen = true;			
	}
}

// function CloseMenu() {
// 	let menu = document.querySelectorAll('.selection a');
// 	menu.addEventListener('click', function() {
// 		document.querySelector('.selection').style.visibility = "hidden";
// 	});
// }

function SetUnit(u) {
	unit = u;
	document.querySelector("#unit").innerHTML = "°" + unit;
}

function Converting(convert_to) {
	let input = document.querySelector('#inpt').value;
	if (unit == 'C' && convert_to == 'F') {
		let result = (input * 9/5) + 32;
		document.querySelector('#inpt').value = result;
		document.querySelector('#unit').innerHTML = "°"+convert_to;
		unit = convert_to;
	} else if (unit == 'C' && convert_to =='K') {
		let result = parseInt(input, 10)+273.15;
		document.querySelector('#inpt').value = result;
		document.querySelector('#unit').innerHTML = "°"+convert_to;
		unit = convert_to;			
	} else if (unit == 'F' && convert_to =='C') {
		let result = (input - 32) * 5/9;
		document.querySelector('#inpt').value = result;
		document.querySelector('#unit').innerHTML = "°"+convert_to;
		unit = convert_to;			
	} else if (unit == 'F' && convert_to =='K') {
		let result = (input - 32) / 1.8 + 273.15;
		document.querySelector('#inpt').value = result;
		document.querySelector('#unit').innerHTML = "°"+convert_to;		
		unit = convert_to;			
	} else if (unit == 'K' && convert_to =='C') {
		let result = input - 273.15;
		document.querySelector('#inpt').value = result;
		document.querySelector('#unit').innerHTML = "°"+convert_to;
		unit = convert_to;			
	} else if (unit == 'K' && convert_to =='F') {
		let result = 1.8 * (input - 273) + 32;
		document.querySelector('#inpt').value = result;
		document.querySelector('#unit').innerHTML = "°"+convert_to;				
		unit = convert_to;			
	}
}

function Menu(x) {
	if (x=="Temperature") {
		document.querySelector(".temperature-convertion").style.display = "initial";
		document.querySelector(".numsys-convertion").style.display = "none";
		document.querySelector('.selection').style.visibility = "hidden";
	} else if (x == "Number system") {
		document.querySelector(".temperature-convertion").style.display = "none";
		document.querySelector(".numsys-convertion").style.display = "initial";		
		document.querySelector('.selection').style.visibility = "hidden";
	}
}

function ConvertNum(x) {
	if (x=='2') {
		let val = document.querySelector('#number').value;
		val.value = parseInt(val, 2);
	}
}