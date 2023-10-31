let navMenu = false;

const sr = ScrollReveal ({
	distance: '100px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal("#placard-1", {delay: 500, origin: 'top'});
sr.reveal("#placard-2", {delay: 700, origin: 'top'});

function Show() {
	if (navMenu) {
		let asdlf = document.querySelector('.dropdown-menu');
		asdlf.style.visibility = "hidden"
		navMenu = false;
	} else if (navMenu == false){		
		let asdlf = document.querySelector('.dropdown-menu');
		asdlf.style.visibility = "visible"
		navMenu = true;
	}
}
