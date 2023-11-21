const wrap = document.querySelector('#wrap');
const box = wrap.querySelector('div');

wrap.addEventListener('click', () => {
	// let isOn = wrap.classList.contains('on');
	// if (isOn) {
	// 	wrap.classList.remove('on');
	// } else {
	// 	wrap.classList.add('on');
	// }

	isOn ? wrap.classList.remove('on') : wrap.classList.add('on');
});

const btns = document.querySelectorAll('.btns li');
const boxes = document.querySelectorAll('section article');

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', () => {
		for (let el of btns) {
			el.classList.remove('on');
		}
		btns[i].classList.add('on');

		for (let el of boxes) {
			el.classList.remove('on');
		}
		boxes[i].classList.add('on');
	});
}

function active(list, index) {
	for (let el of list) {
		el.classList.remove('on');
	}
	list[index].classList.add('on');
}
