import 'jquery'
import '../css/main.scss'
import '../users.html'
import { RandomGenerator } from './random-generator'

// const outputParagraph = document.querySelector('#outputParagraph');
const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    // outputParagraph.textContent = RandomGenerator.randomInteger();
    outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
    // outputParagraph.text(RandomGenerator.randomRange(1, 500));
};

// const buttonRndInt = document.querySelector('#randomInt');
const buttonRndInt = jQuery('#randomInt');
const buttonRndRange = jQuery('#randomRange');

/*
buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);*/

buttonRndInt.click(outputRandomInt);
buttonRndRange.click(outputRandomRange);