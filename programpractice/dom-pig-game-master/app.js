/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores=[0,0];
var roundScore=0;
var activePlayer=0;
var dice;
// document.querySelector('#current-' +activePlayer).textContent=dice;   

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function()
{
    //random number
    dice=Math.floor(Math.random() *6)+1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    if(dice != 1)
    {
        roundScore +=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }
    else
    {
        activePlayer == 0 ? activePlayer=1:activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        // document.querySelector('.player-1-panel').classList.add('active');
        //document.querySelector('.player-1-panel').classList.remove('active');
        diceDOM.style.display='none';

    }

});

document.querySelector('.btn-hold').addEventListener('click',function()
{
    //add currrent score to global score
    //update the UI
    //Check if player won the game
     
});

//toggle,add and rmove,ternary
