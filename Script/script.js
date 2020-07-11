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
	// let rightSection = document.createElement('section');
	// rightSection.setAttribute('id', 'right-section');

	let aboutDiv = document.createElement('div');
	aboutDiv.className = 'menu-item';
	aboutDiv.innerText = 'Info';

	let interestsDiv = document.createElement('div');
	interestsDiv.className = 'menu-item';
	interestsDiv.innerText = 'Interests';
	let projectsDiv = document.createElement('div');
	projectsDiv.className = 'menu-item';
	projectsDiv.setAttribute('id', 'projects');
	projectsDiv.innerText = 'Portfolio';
	let contactsDiv = document.createElement('div');
	contactsDiv.className = 'menu-item';
	contactsDiv.innerText = 'Contact Me';
	let skillsDiv = document.createElement('div');
	skillsDiv.className = 'menu-item';
	skillsDiv.innerText = 'Skills';
	skillsDiv.setAttribute('id', 'skills-div');

	let backImage = document.createElement('img');
	backImage.src = randomEinstein();
	let wrapImage = document.createElement('div');
	wrapImage.setAttribute('id', 'image-wrapper');
	wrapImage.appendChild(backImage);
	// rightSection.appendChild(wrapImage);
	menuWrapper.appendChild(aboutDiv);
	menuWrapper.appendChild(interestsDiv);

	menuWrapper.appendChild(contactsDiv);
	menuWrapper.appendChild(projectsDiv);
	menuWrapper.appendChild(skillsDiv);
	menuWrapper.appendChild(wrapImage);
	mainDiv.appendChild(menuWrapper);
	// mainDiv.appendChild(rightSection);
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
	// mouseInOut(linkWrapper);
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
// linkProject();
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
	// mouseInOut(aboutWrapper);
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
// aboutSection();
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

function backgroundColorRandomiser() {
	const colorArr = [
		'#8d69af',
		'#63a098',
		'#aca65b',
		'#c38D9E',
		'#882bdfc4',
		'#97CAEF',
		'#7395AE',
		'#83677B',
		'#ADADAD',
		'#C5C6C7',

		'#be466ac4',
		'#C5CBE3'
	];
	let index = Math.round(Math.random() * (colorArr.length - 1));
	return colorArr[index];
}
function changeBackgroundColor({ target }) {
	target.style.backgroundColor = backgroundColorRandomiser();
}
// function mouseInOut(element) {
// 	element.addEventListener('mouseover', setBackgroundColor(element));
// 	element.addEventListener('mouseleave', setBackgroundColor(element));
// }
// function wrapAnyDiv(wrapper) {
// 	mouseInOut(wrapper);
// }
function changeColors() {
	Array.from(document.getElementsByClassName('menu-item')).forEach(function(el) {
		el.addEventListener('mouseenter', changeBackgroundColor);
		el.addEventListener('mouseleave', changeBackgroundColor);
		// el.addEventListener('mouseover', () => {
		// 	el.style.boxShadow = '5px 5px grey';
		// });
	});
}
changeColors();
const colorBtn = document.createElement('div');
colorBtn.setAttribute('id', 'color-button');
let count = countGen();
count.next();
colorBtn.addEventListener('click', () => {
	if (count.next().value % 2 === 0) {
		changeColors();
		colorBtn.innerText = '';
		colorBtn.innerText = 'keep colors';
		colorBtn.style.backgroundColor = '#7395AE';
	} else {
		saveCurrentColors();
		colorBtn.innerText = '';
		colorBtn.innerText = 'change colors';
		colorBtn.style.backgroundColor = '#ADADAD';
	}
});
colorBtn.innerText = 'keep colors';
document.getElementById('menu-wrapper').appendChild(colorBtn);
function saveCurrentColors() {
	let arr = Array.from(document.getElementsByClassName('menu-item'));
	arr.forEach((item) => {
		// console.log('before');
		item.removeEventListener('mouseenter', changeBackgroundColor);
		item.removeEventListener('mouseleave', changeBackgroundColor);

		// console.log('after');
	});
}
function hideOtherDivs() {
	const menuDiv = document.getElementById('menu-wrapper');
	menuDiv.style.display = 'none';
	const windowFull = document.createElement('div');
	windowFull.setAttribute('id', 'item-to-fullsize');

	document.getElementById('main-div').prepend(windowFull);
	const backButton = document.createElement('div');
	backButton.setAttribute('id', 'back-button');
	backButton.innerText = 'BACK';
	backButton.addEventListener('click', backToMain);
	windowFull.appendChild(backButton);
}
function backToMain() {
	document.getElementById('item-to-fullsize').remove();
	const menuDiv = document.getElementById('menu-wrapper');
	menuDiv.style.display = 'grid';
}

function makeFullSize() {
	const menuItems = Array.from(document.getElementsByClassName('menu-item'));
	menuItems.forEach((el) =>
		el.addEventListener('click', () => {
			hideOtherDivs();
			if (event.target.innerText.includes('Info')) {
				let divFamily = document.createElement('div');
				divFamily.innerText = 'Family';
				let divEdu = document.createElement('div');
				divEdu.innerText = 'Education';
				document.getElementById('item-to-fullsize').appendChild(divFamily);
				document.getElementById('item-to-fullsize').appendChild(divEdu);
			}
			if (event.target.innerText.includes('Portfolio')) {
				let proj1 = document.createElement('div');
				proj1.innerText = 'Slider';
				let proj2 = document.createElement('div');
				proj2.innerText = 'To Do APP';
				let proj3 = document.createElement('div');
				proj3.innerText = 'The Tetris';

				document.getElementById('item-to-fullsize').appendChild(proj1);
				document.getElementById('item-to-fullsize').appendChild(proj2);
				document.getElementById('item-to-fullsize').appendChild(proj3);
			}
			if (event.target.innerText.includes('Interests')) {
				let divSport = document.createElement('div');
				divSport.innerText = 'Sports';
				let divDesign = document.createElement('div');
				divDesign.innerText = 'loft style Architecture';
				let divCrypto = document.createElement('div');
				divCrypto.innerText = 'Crypto Currency';

				document.getElementById('item-to-fullsize').appendChild(divSport);
				document.getElementById('item-to-fullsize').appendChild(divDesign);
				document.getElementById('item-to-fullsize').appendChild(divCrypto);
			}
			if (event.target.innerText.includes('Contact')) {
				let divPhone = document.createElement('div');
				divPhone.innerText = 'Mobile';
				let divViber = document.createElement('div');
				divViber.innerText = 'Viber';
				let divFacebook = document.createElement('div');
				divFacebook.innerText = 'FaceBook';
				let divEmail = document.createElement('div');
				divEmail.innerText = 'Email';
				let divAddress = document.createElement('div');
				divAddress.innerText = 'Address';

				document.getElementById('item-to-fullsize').appendChild(divPhone);
				document.getElementById('item-to-fullsize').appendChild(divViber);
				document.getElementById('item-to-fullsize').appendChild(divFacebook);
				document.getElementById('item-to-fullsize').appendChild(divEmail);
				document.getElementById('item-to-fullsize').appendChild(divAddress);
			}
		})
	);
}

makeFullSize();
