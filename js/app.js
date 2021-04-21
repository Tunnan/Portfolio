'use strict';

(() => {
	const target = document.querySelector('#text-entry');

	typeLines(target, [
		`$ ./hello`,
		`I'm a web developer based in Sweden with a love for everything open source. Most of my work is done in JavaScript, but I often play around in a lot of other languages.`,
		`To see more of my personal projects visit my Github.`,
		`$ `
	], 15, () => {
		target.innerHTML += '<span class="blink">_</span>';
		target.innerHTML = target.innerHTML.replace('Github', '<a href="https://github.com/tunnan">Github</a>')
	});
})();
