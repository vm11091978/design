const head = document.querySelector('.head');
const a = head.querySelector('.logo > a');
const links = head.querySelectorAll('.nav-link');

window.onscroll = function() {
	if (window.pageYOffset >= 30) {
		head.style.background = 'black';
		head.style.position  = 'fixed';
		head.style.top = 0;
		a.style.color = 'gray';
		for (let link of links) {
			link.style.color = 'gray';
		}
	}
	if (window.pageYOffset < 30) {
		head.style.background = '#222222';
		head.style.position  = 'absolute';
		head.style.top = '30px';
		a.style.color = 'white';
		for (let link of links) {
			link.style.color = 'white';
		}
	}
}