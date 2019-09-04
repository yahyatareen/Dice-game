var  score,activePlayer,roundScore,dice1,dice2,gamePlaying,prevDice1,prevDice2;
init();

 

document.querySelector('.btn-roll').addEventListener('click' ,function(){
    if(gamePlaying){
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;    
    var diceDOM1=document.querySelector('.dice1');
    var diceDOM2=document.querySelector('.dice2');
    document.querySelector('.dice1').style.display='block';
    document.querySelector('.dice2').style.display='block';''
    diceDOM1.src='dice-'+ dice1 + '.png';
    diceDOM2.src='dice-'+ dice2 + '.png';  
        

    if(dice1===6||dice2===6&& prevDice===6){
        score[activePlayer]=0;
        document.querySelector('#score-'+ activePlayer).textContent = roundScore;
        nextplayer();
    }

    if(dice1!== 1 && dice2!== 1){

    roundScore += dice1+dice2;
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;

}
    
else{
  
    newPlayer();
}
prevDice=dice1||dice2;
}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    score[activePlayer] += roundScore;

    if(score[activePlayer]>=100) {
        document.querySelector('#name-' +activePlayer).textContent="Winner";
        document.querySelector('.dice1').style.display='none';
        document.querySelector('.dice2').style.display='none';
        document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
        gamePlaying=false;
    }

       else{
    newPlayer();
       }
   
});



function newPlayer(){
    document.querySelector('#score-' +activePlayer ).textContent = score[activePlayer];

    activePlayer===0 ? activePlayer=1:activePlayer=0;
    roundScore=0;
   
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice1').style.display='none';
    document.querySelector('.dice2').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click',init);
function init(){

 score=[0,0];
 activePlayer=0;
 roundScore=0;
 gamePlaying=true;
 prevDice=0;
 
document.querySelector('.dice1').style.display='none';
document.querySelector('.dice2').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('#name-0').textContent="Player-1";
document.querySelector('#name-1').textContent="Player-2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

}