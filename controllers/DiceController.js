diceCrawl.controller('DiceCtrl', function DiceCtrl($scope, GamesFactory) {


    function rollDice(diceCount) {
        var dice = [];
        for(var i=0; i < diceCount; i++ ) {
            dice.push( Math.round( Math.random() * 5 ) + 1 );
            console.log(dice[i]);
        }
    }



});
