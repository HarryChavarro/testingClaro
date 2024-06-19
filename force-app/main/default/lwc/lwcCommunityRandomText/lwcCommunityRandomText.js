import { LightningElement } from 'lwc';

export default class LwcCommunityRandomText extends LightningElement {
    randomIndex;

    texts = [
        'Texto Aleatorio 1',
        'Texto Aleatorio 2',
        'Texto Aleatorio 3',
        'Texto Aleatorio 4',
        'Texto Aleatorio 5'
    ];

    connectedCallback() {
        this.displayRandomText();
    }

    handleButtonClick() {
        this.displayRandomText();
    }

    displayRandomText() {
        const randomIndex = Math.floor(Math.random() * this.texts.length);
        this.randomText = this.texts[randomIndex];
    }


}