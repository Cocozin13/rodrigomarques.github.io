document.querySelector('#moon').addEventListener('click' , () => {
	document.body.classList.toggle('dark')
})

const navbar = document.querySelector('.navbar')
const sticky = navbar.offsetTop

function stickyNavbar() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky')
	} else {
		navbar.classList.remove('sticky');
	}
}

window.onscroll = function() {stickyNavbar()};