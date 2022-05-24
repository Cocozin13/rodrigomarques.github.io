//Sticky Navbar
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

//Typewritter Effect

const textDis = document.getElementById("devText");
const phrases = ["Front End Dev","Web Developer"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop ()
{
	isEnd = false
	textDis.textContent = currentPhrase.join("");

	if (i < phrases.length)
	{
		if (!isDeleting && j <= phrases[i].length)
		{
			currentPhrase.push(phrases[i][j]);
			j++
			textDis.textContent = currentPhrase.join("");
		}

		if (isDeleting && j <= phrases[i].length)
		{
			currentPhrase.pop(phrases[i][j]);
			j--
			textDis.textContent = currentPhrase.join("");
		}

		if (j == phrases[i].length)
		{
			isEnd = true;
			isDeleting = true;
		}

		if (isDeleting && j === 0)
		{
			currentPhrase = [];
			isDeleting = false;
			i++
			if (i === phrases.length)
			{
				i = 0;
			}
		}
	}
	const spedUp = Math.random() * (80 -50) + 50;
	const normalSpeed = Math.random() * (300 -200) + 200;
	const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
	setTimeout(loop, time);
}

loop();