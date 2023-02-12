// NAVIGATION

const hambergerButton = document.querySelector('.nav-toggler');
const navigation = document.querySelector('header');

hambergerButton.addEventListener('click', toggleNav);

function toggleNav() {
	hambergerButton.classList.toggle('active');
	navigation.classList.toggle('active');
}

//  CHANGE THEME

const lightMode = document.getElementById('light-theme');
const darkMode = document.getElementById('dark-theme');

darkMode.addEventListener('click', () => {
	darkMode.classList.add('theme-active');
	lightMode.classList.remove('theme-active');

	document.body.classList.add('dark-theme-variable');
});

lightMode.addEventListener('click', () => {
	lightMode.classList.add('theme-active');
	darkMode.classList.remove('theme-active');

	document.body.classList.remove('dark-theme-variable');
});
