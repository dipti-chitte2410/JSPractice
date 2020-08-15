function rpsgame(yourchoice)
{
    console.log(yourchoice)
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=numberTochoice(randtoRPS);
    console.log("computer choice",botchoice);
    results=decidewinner(humanchoice,botchoice);
    console.log(results);
    // botchoice=RandomSource
    // results=deciwinner(humanchoice,botchoice);return [0,1]
    // message=finalmessage(results){'messge':'you won','colors':'green'}
}
function randtoRPS()
{
    return Math.floor(Math.random()*3);
     
}
function numberTochoice(number)
{
    return ['rock','paper','scissor'][number] 
}
function decidewinner(yourchoice,computerchoice)
{
    var rpsdatabase={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    };
    var yourscore=rpsDatabase[yourchoice][computerchoice];
    var computerScore=rpsdatabase[computerScore][yourchoice];
    return[yourscore,computerScore];
}