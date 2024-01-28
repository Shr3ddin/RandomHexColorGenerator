const currentColor = document.querySelector('.generator-title span');
const changeColorBtn = document.querySelector('.change-bg-color-btn');

const getRandomHexColor = () => {
	let hexColor = '#';
	for (let i = 0; i < 6; i++) {
		hexColor += Math.floor(Math.random() * 16).toString(16);
	}

	return hexColor;
};

changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomHexColor()

    document.body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor
});

getRandomHexColor();
