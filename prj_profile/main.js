let navMenu = false;

function Show() {
	if (navMenu) {
		let asdlf = document.querySelector('.nav-menu');
		asdlf.style.visibility = "hidden"
		navMenu = false;
	} else if (navMenu == false){		
		let asdlf = document.querySelector('.nav-menu');
		asdlf.style.visibility = "visible"
		navMenu = true;
	}
}