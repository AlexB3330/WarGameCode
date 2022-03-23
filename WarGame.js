class Cards {
	constructor(){
		this.cardSet = [];
	}
	deckStructure(){
		this.variety = ['diamonds', 'spades', 'hearts','clubs'];	
		this.value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace' ]
		for (let x = 0; x < this.variety.length; x++){
			for (let i = 0; i < this.value.length; i++){
			this.cardSet.push(this.value[i] + ' of ' +this.variety[x]);
			}
		}
	}
	randomizeDeck() {
    		let i = 0;
        	let j = 0;
        	let temp = 0;
    		for (i = this.cardSet.length - 1; i > 0; i--) {
        		j = Math.floor(Math.random() * (i + 1));
        		temp = this.cardSet[i];
        		this.cardSet[i] = this.cardSet[j];
        		this.cardSet[j] = temp;
    		}
	}

	returnCards(){
		return this.cardSet;
	}

	addCard(){
		return this.cardSet.pop();

	}

}

class Players {
	constructor(){
		this.inventory = [];
		this.points = 0;
	}

	acquireCard(card){
		this.inventory.push(card);
	}

	recurrentHand(){
		return this.inventory
	}

	activeCard(){
		return this.inventory.pop();
	}
	addScore(){
		this.points++;
	}
	recurrentScore(){
		return this.points;
	}
	CardValue(card){
		if (card.startsWith('2')){
			return 2;
		}
		else if (card.startsWith('3')){
			return 3;
		}
		else if (card.startsWith('4')){
			return 4;
		}
		else if (card.startsWith('5')){
			return 5;
		}
		else if (card.startsWith('6')){
			return 6;
		}
		else if (card.startsWith('7')){
			return 7;
		}
		else if (card.startsWith('8')){
			return 8;
		}
		else if (card.startsWith('9')){
			return 9;
		}
		else if (card.startsWith('10')){
			return 10;
		}
		else if (card.startsWith('jack')){
			return 11;
		}
		else if (card.startsWith('queen')){
			return 12;
		}
		else if (card.startsWith('king')){
			return 13;
		}
		else if (card.startsWith('ace')){
			return 14;
		}

	}

}

myCard = new Cards();
myCard.deckStructure();
myCard.randomizeDeck();

player1 = new Players();
player2 = new Players();

for (let x = 0; x < 26; x++){
	player1.acquireCard(myCard.addCard());
	player2.acquireCard(myCard.addCard());
}

for (let x = 0; x < 26; x++){

	let player1Card = player1.activeCard();
	let player2Card = player2.activeCard();

	if (player1.CardValue(player1Card) > player2.CardValue(player2Card)){
		console.log('Player one wins as ' + player1Card + ' beats ' + player2Card);
		player1.addScore();
	}
	else if (player1.CardValue(player1Card) < player2.CardValue(player2Card)){
		console.log('Player two wins as ' + player2Card + ' beats ' + player1Card);
		player2.addScore();
	}
	else{
		console.log('players tie because ' + player1Card + ' ties ' + player2Card);
	}

		
}
console.log("Player One Final Score: " + player1.recurrentScore());
console.log("Player Two Final Score: " + player2.recurrentScore());

