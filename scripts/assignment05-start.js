// Chaoqun Ding
/*
Take note of the comments throughout this page
Follow their directions as to what to code and where
*/
const path_to_cards = "../card-images";
const path_to_players = "../images";
/*
PART 1a
---------------------------------------
DEFINE A Card OBJECT
---------------------------------------
*/
class Card{
    constructor(face, value, suit){
        this.face = face;
        this.value = value;
        this.suit = suit;
    }
    describeSelf(){
        return `<img src="${path_to_cards}/${this.face}_of_${this.suit}s.svg" alt="${this.face} of ${this.suit}s. Value: ${this.value}" class="cards">`;
    }
}




/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/
const card_part1 = new Card("king", 10, "heart");
html = ``;
html += `<h2>Part 1: Card Object</h2>`;
html += `<p>Before we build the full Deck of Cards, a single example, demonstration Card object has been created.</p>`;
html += card_part1.describeSelf();
document.getElementById("part1").innerHTML = html;





/*
PART 2a
---------------------------------------
DEFINE A Deck OBJECT
---------------------------------------
Note: Most of the Deck class code should
      not be modified in any way. The only
      Deck code that needs changing is inside the 
      constructor() function. Change nothing else in Deck. 
*/
class Deck{
    constructor(){
        
        //build a deck of Card objects
        //prepare arrays for all the aspects of a Card
        this.faces   = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];        
        this.values  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];        
        this.suits   = ["Spade","Club","Heart","Diamond"];  
        
        //prepare an array to store the Cards in
        this.cards = [];

        //use nested 'for' loops
        //build the Deck of Cards
        //one iteration for each suit
        //one iteration for each face/value pair
        //each time, instantiate a new Card Object
        //add new cards to the using Array.push()        
        let card;
        for(let i=0; i<this.faces.length; i++){
            for(let j=0; j<this.suits.length; j++){
                card = new Card(this.faces[i], this.values[i], this.suits[j]);
                this.cards.push(card);
            }
        }

    }
}

/*
DEFINING Deck OBJECT FUNCTIONS
no changes need to be made 
in the rest of this Deck class definition.
*/
Deck.prototype.dealCard = function(){
     //remove and return the first item in array
    //and shift the index of remaining items 
    const card = this.cards.shift();
    //if we have run out of cards...
    if(card === undefined){
        return 'No more cards';
    }else{
        //return the next card in the array
        return card;
    }         
}
Deck.prototype.shuffle = function(){
 
    let j, x, i;
    //loop through the entire array
    for (i = this.cards.length - 1; i > 0; i--) {
        //randomly select a card
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        //resort cards
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    //return the randomly sorted array
    return this.cards;       
}
Deck.prototype.describeSelf = function(){
    let description = "";
    description += `This deck of cards has ${this.cards.length} card(s) in it`;
    //return the above statement 'description'
    return description;
}
/*
---------------------------------------
end Deck class
---------------------------------------
*/



/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/

//invoke and display the Deck function describeSelf() here...
const deck_part2 = new Deck();
html = ``;
html += `<h2>Part 2: Deck Object Containing Card Objects</h2>`;
html += `<p>Instantiate a Deck object and let its constructor create 52 Card objects. Then shuffle() the Deck.</p>`;
html += `<p>Have the Deck describeSelf() and dealCard(). Display the ard dealt. Again have the Deck describeSelf(), dealCard(), and display the next Card dealt.</p>`;
html += `<p>${deck_part2.describeSelf()}</p>`;
//randomize the cards in the deck using shuffle()
deck_part2.shuffle();
for(let index = 0; index<5; index++){
//take the next card from the deck using dealCard()
    html += `<p>You've been dealt a</p>`
    html += deck_part2.dealCard().describeSelf();
    //invoke and display the Deck function describeSelf() AGAIN here...
    html += `<p>${deck_part2.describeSelf()}</p>`;
}
document.getElementById("part2").innerHTML = html;



/*
PART 3a
---------------------------------------
DEFINE A Player OBJECT
---------------------------------------
*/
class Player{
    constructor(name){
        this.name = name;
        this.cards = []; // represents player's hand in a card game.
    }
    addCardToHand(aCard){
        /* This function requires a Card object as parameter and will use Array.push() to add the Card object to the Player's hand. */
        this.cards.push(aCard);
    }
    describeSelf(){
        /* This function should return a string that includes the Player's name and an HTML list of all the Cards in the Player's hand. */
        html = ``;
        html += `<img src="${path_to_players}/${this.name}.jpg" alt="Picture of ${this.name}" class="avatars">`;
        html += `<h2 class="player_names">${this.name}'s hand:</h2>`;
        html += `<ul class="cards_on_hand">`;
        this.cards.forEach(function(card){
            html += `<li>${card.describeSelf()}</li>`;
        })
        html += `</ul>`;
        return html;
    }
}


/*
PART 3b
Instantiate at least two Player OBJECTs
Instantiate a new Deck and shuffle() it
Deal five Cards to each Player
Display each players hand to the browser
*/

const player1 = new Player("jana");
const player2 = new Player("joe");
const player3 = new Player("jane");
const player4 = new Player("jim");

const deck = new Deck();
deck.shuffle();
for(let i=0; i<5; i++){
    player1.addCardToHand(deck.dealCard());
    player2.addCardToHand(deck.dealCard());
    player3.addCardToHand(deck.dealCard());
    player4.addCardToHand(deck.dealCard());
}
html = ``;
html += `<h2>Part 3: Player Objects Using a Deck Object and Several Cards</h2>`;
html += `<p>Begin with instantiating a fresh new Deck object and giving it a shuffle().</p>`;
html += `<p>Now instantiating a few Player Objects and dealing then five cards each...</p>`;
html += player1.describeSelf();
html += player2.describeSelf();
html += player3.describeSelf();
html += player4.describeSelf();
document.getElementById("part3").innerHTML = html;