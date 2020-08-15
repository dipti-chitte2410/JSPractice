//Coding Challenge 1
        // var mark_mass=78;
        // var john_mass=92;
        // var mark_height=1.69;
        // var b=john_height=1.95;

        // mark_BMI=mark_mass / (mark_height*mark_height);
        // john_BMI=john_mass / (john_height*john_height);
        // console.log(mark_BMI);
        // console.log(john_BMI);

        // greater_BMI=mark_BMI > john_BMI;

        // console.log("is marks BMI higher than john's BMI:",greater_BMI);
//coding challenge 2
        // var j_score= 89+120+103;
        // var m_score= 116+94+123;
        // var Mary_score= 97+134+105;
        // A_J_SCORE=j_score/3;
        // A_M_score=m_score/3;
        // A_mary_score=Mary_score/3;

        // if(A_J_SCORE > A_M_score && A_J_SCORE>A_mary_score)
        // {
        //     console.log("John team has won!.",A_J_SCORE);

        // }
        // else if(A_M_score > A_J_SCORE && A_M_score > A_mary_score)
        // {
        //     console.log("Mark team has won!.",A_J_SCORE,A_M_score);
        // }
        // else if(A_mary_score > A_J_SCORE && A_mary_score > A_M_score)
        // {
        //     console.log(" Mary team has won !.",A_mary_score);
        // }
        // else
        // {
        //     console.log("Its a draw")
        // }

//Functions:

//Array:
        // let name = ['john' , 'Mark' , 'Jane'];
        // var years=new Array(1997,1969,1948);
        // console.log(name[1]);

        // name[0]='ben';
        // console.log(name);

        // let john=['john','smith',1990,'teacher',false,'designer'];
        // john.push('blue');
        // john.unshift("Mr.");
        // john.pop();  
        // john.shift();
        // console.log(john.indexOf(1990));
        // console.log(john);


        // var ans=john.indexOf('designer') === -1 ? 'john is not a designer' :'john is designer';
        // console.log(ans); 
//Challenge :3
        // function tip_calculator(tip_percent,bill)
        // {
        //     return tip_percent*bill;
        // }


        // Bill_1=124;
        // Bill_2=48;
        // Bill_3=268;
        // tip2=tip_calculator(0.2,Bill_1)+Bill_1;
        // tip1=tip_calculator(0.15,Bill_2)+Bill_2;
        // tip3=tip_calculator(0.1,Bill_3)+Bill_3;;

        // let tip_array=[],final_amt=[];
        // tip_array.push(tip1);
        // tip_array.push(tip2);
        // tip_array.push(tip3);

        // console.log(tip_array);
        // final_amt.push(Bill_1);
        // final_amt.push(Bill_2);
        // final_amt.push(Bill_3);

        // console.log(final_amt);


//Objects in Javascript:
        // var john={
        //     firstname:'John',
        //     lastname:'Smith',
        //     birthyear:1990,
        //     famiy:['jane','Mark','Bob',"emily"],
        //     job:'teacher',
        //     isMarried:false
        // }

        // console.log(john.firstname);
        // console.log(john['lastname']);
        // var x='birthyear';
        // console.log(john[x]);

        // john.job='Designer';
        // john['isMarried']=true;
        // console.log(john)

        // //new object syntax
        // var Jane=new Object();
        // Jane.birthyear=1969;
        // Jane.name='Jane';
        // Jane['lastname']='Smith';
        // console.log(Jane);

//Objects and methods
        // var john={
        //             firstname:'John',
        //             lastname:'Smith',
        //             birthyear:1990,
        //             famiy:['jane','Mark','Bob',"emily"],
        //             job:'teacher',
        //             isMarried:false,
        //             calcAge:function(birthyear)
        //             {
        //                 this.age= 2020-this.birthyear;
        //             }
        //         };

        // john.calcAge(1990);
        // console.log(john);

//Challenge :4
                // john={
                // name:"John",
                // mass:110,
                // height:1.95,
                // calBMI:function()
                // {
                //         return this.mass / (this.height *this.height);
                // }
                // };
                // Mark={
                // name:"Mark",
                // mass:78,
                // height:1.69,
                // calBMI:function()
                // {
                //         return this.mass / (this.height *this.height);
                // }
                // };


                // let heigher_BMI=john.calBMI > Mark.calBMI ? 'John is heavier than MArk' : 'Mark is heavier than John' ;
                // console.log(heigher_BMI); 

//lOOPS AND iTERATION 
                // for(let i=1;i<10;i++)
                // {
                //         console.log(i);
                // }

                // var john=['john','Smith',1990,'Designer',false];
                // for (let i=john.length-1;i>=0;i--)
                // {
                //         console.log(john[i]);
                // }
                // let i=0;
                // while(i<john.length)
                // {
                //         console.log(john[i]);
                //         i++;
                // } 

                // for(let i=0;i<john.length;i++)
                // {
                //         if(typeof(john[i])=='number')
                //         {
                //                 console.log("check");

                //                 break;
                //         }
                //         console.log(john[i]);
                // }

//Challenge
//let bill_values=[124,48,268,180,42];
let all_tips=[];
let all_final=[];

let object_bill={
        bill_values:[124,48,268,180,42],
        tip_calculate:function(){
                for(let i=0;i<this.bill_values.length;i++){
                        console.log("jiiii");
                        if(this.bill_values[i]<50)
                        {
                                tip_amt=this.bill_values[i]*0.2;
                                final_amt=tip_amt+ this.bill_values[i];
                                all_tips.push(tip_amt);
                                all_final.push(final_amt);
                        }
                        else if(this.bill_values[i]>50 && this.bill_values[i]<200)
                        {
                                tip_amt=this.bill_values[i]*0.15;
                                final_amt=tip_amt+ this.bill_values[i];                                
                                all_tips.push(tip_amt);
                                all_final.push(final_amt);
                        }
                        else
                        {
                                tip_amt=this.bill_values[i]*0.1;
                                final_amt=tip_amt+ this.bill_values[i];                                
                                all_tips.push(tip_amt);
                                all_final.push(final_amt);
                        }
                        
                }

        }
}
object_bill.tip_calculate();

console.log(all_final);
console.log(all_tips);









