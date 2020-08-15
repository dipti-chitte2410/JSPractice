***data types:
String,number,boolean,null,undefined
***Variable coercion:
Js automatically converts data type in another data types
var age=40;
console.log('firstname'+age);//automatically converts number to string
*** variable mutation:
same variable with different type
age="Hiii there ";

operator:(Assosociativity)
var x, y;
x=y=(3+5)* 4 - 6;
console.log(x,y);
o/p:
26 26 

1)x*=y //x=x*y

Array:
let john=['john','blue','false',1990,98838388];
john.shift()  //rmoves first element
john.unshift("Mr.");  //Adds this element at 0 index
john.pop()//removes last element
john.push();//Adds element at last
john.indexof(1990) //will display index of 1990
var ans=john.indexOf('designer') === -1 ? 'john is not a designer' :'john is designer';
console.log(ans);

//Continue statement
It's only mean is ignore the loop i containing condition that is true
for(let i=0;i<john.length;i++)
{
        if(typeof(john[i])=='string')
        {
                continue;
        }
        console.log(john[i]);
}

//Checking datatypes condition typeof(x)=='number','string' this way
for(let i=0;i<john.length;i++)
{
        if(typeof(john[i])=='number')
        {
                console.log("check");

                break;
        }
        console.log(john[i]);
}



1>Hoisting:Use of function declaration before actually defining it
          execution context

2>Scooping:

Scope chain :Is the order in which functions are written  also known as lexical chain
var a="hello";
first();
function first()
{
        var b="Hii";
        second();
        console.log("Its first function");
        function second()
        {
                third();
                console.log("Its second function");
        }
}
function third()
{
        console.log(a+"John");
}
//Second function can called third function bacoz it has got global access
helloJohn
Its second function
Its first function


//Constant:
const variable does not define pernamanat value to a variable but a constant reference which can be further change using properties

//THIS keyword
this variable is not assigned a value until object calls that method
in REGULAR FUNCTION like console.log(this); call it refere to windows varible
in function call this varible simply call current object that calling that function

//Method Borrowing
using one object method to be used in another object
let john={
        name:'John',
        year:1990,
        calage:function()
        {
                        console.log(this);
                        console.log(2020- this.year);

                        function innerFunction()
                        {
                                console.log(this);
                        }
                        innerFunction();
        }
}
john.calage();

var mike=
{
        name:"mike",
        year:1997
}
//Method Borrowing

mike.calage=john.calage;
mike.calage();

//DOCUMENT Object Model(DOM)

Strucctured representation of html language
Used to connect html pages

fully object orientd representation


documnet variable has many differnet method
In that .innerHTML =defines that we can enclosed string with html tag like <em>+'Helllow'+</em>
.textcontent=TO just display text not html ing those text


//Changing style properties dynamically
document.querySelector('.dice').style.display='none';

//addEventListener()
It call a function based on differnt action such as mouseclick,hover,keyboard enteretc..
function btn()
{

}
document.querySelector('.btn-roll').addEventListener('click',btn())
click is type performed by hardware like keyboard,mouse and it calls a function which will performed an action

//CODE-pig game:
1.dice=Math.floor(Math.random() *6)+1;
2.    var diceDOM=document.querySelector('.dice');
3.    diceDOM.style.display='block';
4.    diceDOM.src='dice-'+dice+'.png';
In addEvent we wanted to change image as per random dice everytime we click the button
1. line we declare how we gonna get random number
2. we store element descibed be class which is image as ('.dice')
3. we provide properties that it should shown as block
4. change that image by using .src attribute of img tag and displaying it as per random dice number

//TOGGLE
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

toggle adds the class if it's not there that is in this case is:toggle.('active')
// document.querySelector('.player-1-panel').classList.add('active');
//document.querySelector('.player-1-panel').classList.remove('active');
on the place of toggle other options are: add or remove


















 









