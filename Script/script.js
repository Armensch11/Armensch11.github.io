function mainBody() {
	let mainDiv = document.createElement('div');
	mainDiv.setAttribute('id', 'main-div');
	let menuWrapper = document.createElement('div');
	menuWrapper.setAttribute('id', 'menu-wrapper');
	let rightSection = document.createElement('section');
	rightSection.setAttribute('id', 'right-section');

	let aboutDiv = document.createElement('div');
	aboutDiv.className = 'menu-item';
	aboutDiv.innerText = 'ABOUT';

	let interestsDiv = document.createElement('div');
	interestsDiv.className = 'menu-item';
	interestsDiv.innerText = 'INTERESTS';
	let projectsDiv = document.createElement('div');
	projectsDiv.className = 'menu-item';
	projectsDiv.setAttribute('id', 'projects');
	projectsDiv.innerText = 'PROJECTS';
	let contactsDiv = document.createElement('div');
	contactsDiv.className = 'menu-item';
	contactsDiv.innerText = 'CONTACTS';
	menuWrapper.appendChild(aboutDiv);
	menuWrapper.appendChild(interestsDiv);
	menuWrapper.appendChild(projectsDiv);
	menuWrapper.appendChild(contactsDiv);
	mainDiv.appendChild(menuWrapper);
	mainDiv.appendChild(rightSection);
	document.body.appendChild(mainDiv);
}
mainBody();

const myProjectLinks = {
	Slider: 'https://armensch11.github.io/SlideShow/',
	['to Do App']: 'https://armensch11.github.io/todoapp/',
	['the Tetris']: 'https://armensch11.github.io/tetris/'
};
let counter = 1;
function linkProject() {
	const linkWrapper = document.getElementById('projects');
	// linkWrapper.setAttribute('id', 'link-wrapper');
	// linkWrapper.innerHTML = 'Projects Accomplished';
	for (let link in myProjectLinks) {
		let newLink = document.createElement('div');
		newLink.className = 'links-to-projects';
		newLink.setAttribute('id', link);
		newLink.setAttribute('href', myProjectLinks[link]);
		// newLink.href = myProjectLinks[link];
		// newLink.target = 'blank';
		newLink.style.display = 'none';
		newLink.innerHTML = link;
		newLink.addEventListener('click', (e) => {
			e.stopImmediatePropagation();
			// console.log('I am clicked');
			if (e.target.style.display === 'initial') {
				if (document.getElementsByTagName('iframe').length === 0) {
					let newFrame = document.createElement('iframe');
					newFrame.src = e.target.getAttribute('href');
					document.getElementById('right-section').appendChild(newFrame);
				} else {
					let newFrame = document.getElementsByTagName('iframe')[0];
					newFrame.src = e.target.getAttribute('href');
				}
			}
		});
		linkWrapper.appendChild(newLink);
	}

	linkWrapper.addEventListener('click', () => {
		// console.log('I am clicked');
		if (document.getElementsByTagName('iframe').length !== 0) {
			let newFrame = document.getElementsByTagName('iframe')[0];
			newFrame.remove();
		}
		let projectLinks = document.getElementsByClassName('links-to-projects');
		if (counter % 2 === 0) {
			for (let link of projectLinks) {
				link.style.display = 'none';
			}
		} else {
			let delay = 0;
			for (let link of projectLinks) {
				setTimeout(() => {
					link.style.display = 'initial';
<<<<<<< HEAD
				}, 150 + delay);
				delay += 70;
=======
				}, 300 + delay);
				delay += 200;
>>>>>>> 4c51f28... new landing page
			}
		}
		counter++;
	});
}
linkProject();
