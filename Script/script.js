function randomEinstein() {
	let arr = [
		'./Images/AlEin1.png',
		'./Images/AlEin2.png',
		'./Images/AlEin3.png',
		'./Images/AlEin4.png',
		'./Images/AlEin5.png',
		'./Images/AlEin6.png'
	];
	let index = Math.round(Math.random() * arr.length);

	return arr[index] ? arr[index] : './Images/Strongfish.jpg';
}
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
	let backImage = document.createElement('img');
	backImage.src = randomEinstein();
	let wrapImage = document.createElement('div');
	wrapImage.setAttribute('id', 'image-wrapper');
	wrapImage.appendChild(backImage);
	rightSection.appendChild(wrapImage);
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

function linkProject() {
	let count = countGen();
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
		document.getElementById('image-wrapper').style.display = 'none';
		if (document.getElementsByTagName('iframe').length !== 0) {
			let newFrame = document.getElementsByTagName('iframe')[0];
			newFrame.remove();
		}
		let projectLinks = document.getElementsByClassName('links-to-projects');
		if (count.next().value % 2 === 0) {
			for (let link of projectLinks) {
				link.style.display = 'none';
			}
			document.getElementById('image-wrapper').style.display = 'initial';
		} else {
			let delay = 0;
			for (let link of projectLinks) {
				setTimeout(() => {
					link.style.display = 'initial';
				}, 150 + delay);
				delay += 70;
			}
			closeOtherSubMenu(document.getElementsByClassName('menu-item'), linkWrapper.innerText);
		}
	});
}
linkProject();
function* countGen() {
	let count = 0;
	while (true) {
		yield count++;
	}
}
function aboutSection() {
	let count = countGen();
	let aboutWrapper = document.getElementsByClassName('menu-item')[0];
	aboutWrapper.setAttribute('id', 'about');
	// let itemsWrapper=document.createElement('div');
	// itemsWrapper.className='menu'
	let divArr = [ 'Family', 'Education' ];
	let elArr = [];
	let familyDiv = document.createElement('div');
	familyDiv.className = 'about-item';
	familyDiv.innerText = divArr[0];
	elArr.push(familyDiv);
	let eduDiv = document.createElement('div');
	eduDiv.className = 'about-item';
	eduDiv.innerText = divArr[1];
	elArr.push(eduDiv);
	for (let el of elArr) {
		el.addEventListener('click', () => {});
		el.style.display = 'none';
		aboutWrapper.appendChild(el);
	}

	aboutWrapper.addEventListener('click', () => {
		let items = Array.from(document.getElementsByClassName('about-item'));
		if (document.getElementsByTagName('iframe').length > 0) {
			let newFrame = document.getElementsByTagName('iframe')[0];

			newFrame.remove();
		}
		if (count.next().value % 2 === 0) {
			document.getElementById('image-wrapper').style.display = 'none';
			// console.log(aboutWrapper.innerText);

			let delay = 0;
			items.forEach((el) => {
				setTimeout(() => {
					el.style.display = 'initial';
				}, 150 + delay);
				delay += 100;
			});
			closeOtherSubMenu(document.getElementsByClassName('menu-item'), aboutWrapper.innerText);
		} else {
			document.getElementById('image-wrapper').style.display = 'initial';
			items.forEach((el) => {
				el.style.display = 'none';
			});
		}
	});
}
aboutSection();
function closeOtherSubMenu(arrLike, inTxt) {
	// console.log(arrLike);
	let arr = Array.from(arrLike);
	for (let el of arr) {
		// console.log(el.children);
		if (el.children && el.innerText.includes(inTxt) === false) {
			for (let elem of el.children) {
				elem.style.display = 'none';
			}
			// childArr.forEach((el) => (el.style.display = 'none'));
		}
	}
}
