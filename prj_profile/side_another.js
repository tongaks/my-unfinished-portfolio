function Close() {
	document.getElementById('navBar').style.visibility = "hidden";
}

function Open() {
	document.getElementById('navBar').style.visibility = "visible";
}

const sr = ScrollReveal ({
	distance: '100px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal('#description', {delay: 200, origin: 'top'});
sr.reveal('#mainImg', {delay: 400, origin: 'top'});
sr.reveal('.bubble-normal', {delay: 500, origin: 'top'});
sr.reveal('.bubble-bigger', {delay: 600, origin: 'right'});

function Darkmode() {
	let containers = document.querySelectorAll(".section");
	let elements = document.querySelectorAll("p, h1, h2");
	let theme = "0";
	if (theme == "1") {
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.color = "lightgray";
		}
		for (let i = 0; i < containers.length; i++) {
			containers[i].style.backgroundColor = "#1f1f1f";
		}
		document.querySelector(".description-container").style.borderColor = "white";
		theme = "0";
	} else {
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.color = "black";
		}
		for (let i = 0; i < containers.length; i++) {
			containers[i].style.backgroundColor = "#white";
		}
		document.querySelector(".description-container").style.borderColor = "black";
		theme = "1";
	}
}