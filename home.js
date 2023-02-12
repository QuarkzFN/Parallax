// NAVIGATION

const hambergerButton = document.querySelector('.nav-toggler');
const navigation = document.querySelector('header');

hambergerButton.addEventListener('click', toggleNav);

function toggleNav() {
	hambergerButton.classList.toggle('active');
	navigation.classList.toggle('active');
}

// PARALLAX SCROLLING EFFECTS

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn_a = document.getElementById('btn-a');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
	let value = window.scrollY;
	stars.style.left = value * 0.25 + 'px';
	moon.style.top = value * 1.05 + 'px';
	sun.style.top = value * 1.05 + 'px';
	mountains_behind.style.top = value * 0.5 + 'px';
	mountains_front.style.top = value * 0 + 'px';
	text.style.marginRight = value * 4 + 'px';
	text.style.marginTop = value * 1.5 + 'px';
	btn_a.style.marginTop = value * 1.8 + 'px';
	header.style.top = value * 0.5 + 'px';
});

// CHANGE THEME

const lightMode = document.getElementById('light-theme');
const darkMode = document.getElementById('dark-theme');

darkMode.addEventListener('click', () => {
	sun.style.display = 'none';
	moon.style.display = 'flex';
	stars.style.display = 'flex';

	darkMode.classList.add('theme-active');
	lightMode.classList.remove('theme-active');
	document.body.classList.add('dark-theme-variable');
	btn_a.classList.add('dark-theme-variable');
});

lightMode.addEventListener('click', () => {
	sun.style.display = 'flex';
	moon.style.display = 'none';
	stars.style.display = 'none';

	lightMode.classList.add('theme-active');
	darkMode.classList.remove('theme-active');
	document.body.classList.remove('dark-theme-variable');
	btn_a.classList.remove('dark-theme-variable');
});

// RED BG CONTAINER

const red_bg_container = document.getElementById('red_bg_container');

function fondRouge(f) {
	red_bg_container.classList.toggle('red_variable');
}

fondRouge();