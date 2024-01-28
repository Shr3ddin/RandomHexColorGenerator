const currentColor = document.querySelector('.generator-title span');
const changeColorBtn = document.querySelector('.change-bg-color-btn');

const getRandomHexValue = () => {
	const randomIndexPos = Math.floor(Math.random() * signs.length);

	const randomHexValue = signs[randomIndexPos];

	return randomHexValue;
};

const getRandomHexColor = hexLength => {
	let hexString = '';

	for (let i = 0; i < hexLength; i++) {
		hexString += getRandomHexValue();
	}
console.log(hexString);
	return hexString;
};

changeColorBtn.addEventListener('click', () => {
    const randomHexString = `#${getRandomHexColor(6)}`

    document.body.style.backgroundColor = randomHexString
    currentColor.textContent = randomHexString
})