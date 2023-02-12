var clock = setInterval(function() {
	var getTime = new Date(
		new Date().toLocaleString('en-US', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false
		})
	);
	var time =
		((getTime.getHours() % 24 || 24) < 10 ? '0' : '') +
		(getTime.getHours() % 24 || 24) +
		'' +
		(getTime.getMinutes() < 10 ? '0' : '') +
		getTime.getMinutes() +
		'' +
		(getTime.getSeconds() < 10 ? '0' : '') +
		getTime.getSeconds();

	var currTime = time.split('');

	document.querySelectorAll('.block').forEach((block, index) => {
		block.className = 'block';
		block.classList.add('cube' + currTime[index]);
	});
}, 50);
