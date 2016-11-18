$(document).ready(function() {
  // deck = shuffle(deck);
  // deal(deck);
  hand = [{ rank: 'A', type: 'H' },{ rank: '2', type: 'H' },{ rank: '3', type: 'H' },{ rank: '4', type: 'H' }, { rank: '5', type: 'H' }];
  appendHand(hand);
  console.log("One pair: " + onePair(hand));
  console.log("Two Pair: " + twoPair(hand));
  console.log("3 of a kind: " + threeOfAKind(hand));
  console.log("Quads: " + quads(hand));
  console.log("Full House: " + fullHouse(hand));
  console.log("Straight: " + straight(hand));
  console.log("Flush: " + flush(hand));
  console.log("Straight Flush: " + straightFlush(hand));
  console.log("Royal Flush: " + royalFlush(hand));
});


function appendHand(hand) {
  $('.hand-container').empty();
  for (var i = 0; i < hand.length; i++) {
    $('.hand-container').append('<p>' + hand[i].rank + hand[i].type + '</p>');
  }
}

var rank = [];

var hand = [];

function shuffle (deck) {
  var i = 0
    , j = 0
    , temp = null

  for (i = deck.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  return deck;
}

function deal(deck) {
  for (var i = 0; i < 5; i++) {
    hand.push(deck[i]);
  }
}


//hand will be array with 5 objects
//evaluate whether a hand has one pair and get the value of the pair
function onePair(hand) {
  var value;
  var result = false;
  var pair = 0;
  for (var i = 0; i < hand.length; i++) {
    for(var j = 0; j < hand.length; j++) {
      if (j === i) {
        continue;
      } else {
        if (hand[i].rank === hand[j].rank){
        value = hand[i].rank;
        pair++;
        }
      }
    }
  }
  // console.log(pair);
  if (pair === 2) {
    result = true;
    console.log(value);
  }
  return result;
}


function twoPair(hand) {
  var value = [];
  var result = false;
  var pair = 0;
  for (var i = 0; i < hand.length; i++) {
    for(var j = 0; j < hand.length; j++) {
      if (j === i) {
        continue;
      } else {
        if (hand[i].rank === hand[j].rank){
        value.push(hand[i].rank);
        pair++;
        }
      }
    }
  }
  // console.log(pair);
  if (pair === 4) {
    result = true;
    console.log(value);
  }
  return result;
}

function threeOfAKind(hand) {
  var value;
  var result = false;
  var pair = 0;
  for (var i = 0; i < hand.length; i++) {
    for(var j = 0; j < hand.length; j++) {
      if (j === i) {
        continue;
      } else {
        if (hand[i].rank === hand[j].rank){
        value = hand[i].rank;
        pair++;
        }
      }
    }
  }
  // console.log(pair);
  if (pair === 6) {
    result = true;
    console.log(value);
  }
  return result;
}

function quads(hand) {
  var value;
  var result = false;
  var pair = 0;
  for (var i = 0; i < hand.length; i++) {
    for(var j = 0; j < hand.length; j++) {
      if (j === i) {
        continue;
      } else {
        if (hand[i].rank === hand[j].rank){
        value = hand[i].rank;
        pair++;
        }
      }
    }
  }
  // console.log(pair);
  if (pair === 12) {
    result = true;
    console.log(value);
  }
  return result;
}

function fullHouse(hand) {
  var value;
  var result = false;
  var pair = 0;
  for (var i = 0; i < hand.length; i++) {
    for(var j = 0; j < hand.length; j++) {
      if (j === i) {
        continue;
      } else {
        if (hand[i].rank === hand[j].rank){
        value = hand[i].rank;
        pair++;
        }
      }
    }
  }
  // console.log(pair);
  if (pair === 8) {
    result = true;
    console.log(value);
  }
  return result;
}


function straight(hand) {
  rank = [];
  var wheelStraight = [2, 3, 4, 5, 14];
  var straight = true;
  for (var i = 0; i < hand.length; i++) {
    switch(hand[i].rank) {
      case 'A':
      hand[i].rank = 14
      break;
      case 'K':
      hand[i].rank = 13
      break;
      case 'Q':
      hand[i].rank = 12
      break;
      case 'J':
      hand[i].rank = 11;
    }
  rank.push(Number(hand[i].rank));
  }
  rank.sort(function(a, b){return a-b});
  for (var i = 0; i < rank.length -1; i++) {
    if (rank[i] + 1 !== rank[i + 1] && rank !== wheelStraight) {
      console.log("wheelStraight " + wheelStraight + " rank " + rank);
      straight = false;
    }
  }
  // console.log(rank);
  return straight;
}


function flush(hand) {
  var flush = true;
  for (var i = 0; i < hand.length - 1; i++) {
    if (hand[i].type !== hand[i + 1].type) {
      flush = false;
      break;
    }
  }
  return flush;
}

function straightFlush() {
  var straightFlush = false;
  if (flush(hand) && straight(hand)) {
    straightFlush = true;
  }
  return straightFlush;
}

function royalFlush() {
  if (straightFlush(hand) && rank[4] === 14) {
    return true;
  } else {
    return false;
  }
}

var deck = [
  // hearts
  { rank: 'A', type: 'H' },
  { rank: '2', type: 'H' },
  { rank: '3', type: 'H' },
  { rank: '4', type: 'H' },
  { rank: '5', type: 'H' },
  { rank: '6', type: 'H' },
  { rank: '7', type: 'H' },
  { rank: '8', type: 'H' },
  { rank: '9', type: 'H' },
  { rank: '10', type: 'H' },
  { rank: 'J', type: 'H' },
  { rank: 'Q', type: 'H' },
  { rank: 'K', type: 'H' },

  // spades
  { rank: 'A', type: 'S' },
  { rank: '2', type: 'S' },
  { rank: '3', type: 'S' },
  { rank: '4', type: 'S' },
  { rank: '5', type: 'S' },
  { rank: '6', type: 'S' },
  { rank: '7', type: 'S' },
  { rank: '8', type: 'S' },
  { rank: '9', type: 'S' },
  { rank: '10', type: 'S' },
  { rank: 'J', type: 'S' },
  { rank: 'Q', type: 'S' },
  { rank: 'K', type: 'S' },

  // diamonds
  { rank: 'A', type: 'D' },
  { rank: '2', type: 'D' },
  { rank: '3', type: 'D' },
  { rank: '4', type: 'D' },
  { rank: '5', type: 'D' },
  { rank: '6', type: 'D' },
  { rank: '7', type: 'D' },
  { rank: '8', type: 'D' },
  { rank: '9', type: 'D' },
  { rank: '10', type: 'D' },
  { rank: 'J', type: 'D' },
  { rank: 'Q', type: 'D' },
  { rank: 'K', type: 'D' },

  // clubs
  { rank: 'A', type: 'C' },
  { rank: '2', type: 'C' },
  { rank: '3', type: 'C' },
  { rank: '4', type: 'C' },
  { rank: '5', type: 'C' },
  { rank: '6', type: 'C' },
  { rank: '7', type: 'C' },
  { rank: '8', type: 'C' },
  { rank: '9', type: 'C' },
  { rank: '10', type: 'C' },
  { rank: 'J', type: 'C' },
  { rank: 'Q', type: 'C' },
  { rank: 'K', type: 'C' }

];
