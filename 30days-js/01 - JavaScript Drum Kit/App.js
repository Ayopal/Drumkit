'use strict'

//Selecting DOM element
const keys = document.querySelectorAll(".key");
const keyArr = Array.from(keys);

function playSound(e) {
	//get the div data that is equals to the keypress number
	const keyPress = document.querySelector(`div[data-key="${e.which}"]`);
	if (!keyPress) return;
	keyPress.classList.toggle("playing");

	//get the audio data that is equals to the keypress number
	const audio = document.querySelector(`audio[data-key="${e.which}"]`);
	audio.currentTime = 0;
	audio.play();
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
}

function playS(){
    //get data-key attribute for
    const code = this.getAttribute('data-key');
	this.classList.toggle("playing");

    const audio = document.querySelector(`audio[data-key = "${code}"]`);
    audio.currentTime = 0;
    audio.play();

}

keyArr.forEach((key) =>	key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
keyArr.forEach(key => key.addEventListener("click", playS));




