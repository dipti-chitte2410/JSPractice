        // let all_tips_j=[];
        // let all_final_j=[];
        // let all_tips_M=[];
        // let all_final_M=[];

        // function get_average(array)
        // {
        // let sum=0;
        // for(let i=0;i<array.length;i++)
        // {
        //         sum=array[i]+sum;
        // }
        // return sum/array.length;
        // }


        // let mark={
        //         firstname:'Mark Miller',
        //         bill_values:[77,375,110,45],
        //         tip_calculate:function(){
        //                 for(let i=0;i<this.bill_values.length;i++){
        //                         console.log("jiiii");
        //                         if(this.bill_values[i]<100)
        //                         {
        //                                 tip_amt=this.bill_values[i]*0.2;
        //                                 final_amt=tip_amt+ this.bill_values[i];
        //                                 all_tips_M.push(tip_amt);
        //                                 all_final_M.push(final_amt);
        //                         }
        //                         else if(this.bill_values[i]>100 && this.bill_values[i]<300)
        //                         {
        //                                 tip_amt=this.bill_values[i]*0.1;
        //                                 final_amt=tip_amt+ this.bill_values[i];                                
        //                                 all_tips_M.push(tip_amt);
        //                                 all_final_M.push(final_amt);
        //                         }
        //                         else
        //                         {
        //                                 tip_amt=this.bill_values[i]*0.25;
        //                                 final_amt=tip_amt+ this.bill_values[i];                                
        //                                 all_tips_M.push(tip_amt);
        //                                 all_final_M.push(final_amt);
        //                         }
                                
        //                 }

        //         }
        // }

        // let john={
        // firstname:'John',
        // bill_values:[124,48,268,180,42],
        // tip_calculate:function(){
        //         for(let i=0;i<this.bill_values.length;i++){
        //                 console.log("jiiii");
        //                 if(this.bill_values[i]<50)
        //                 {
        //                         tip_amt=this.bill_values[i]*0.2;
        //                         final_amt=tip_amt+ this.bill_values[i];
        //                         all_tips_j.push(tip_amt);
        //                         all_final_j.push(final_amt);
        //                 }
        //                 else if(this.bill_values[i]>50 && this.bill_values[i]<200)
        //                 {
        //                         tip_amt=this.bill_values[i]*0.15;
        //                         final_amt=tip_amt+ this.bill_values[i];                                
        //                         all_tips_j.push(tip_amt);
        //                         all_final_j.push(final_amt);
        //                 }
        //                 else
        //                 {
        //                         tip_amt=this.bill_values[i]*0.1;
        //                         final_amt=tip_amt+ this.bill_values[i];                                
        //                         all_tips_j.push(tip_amt);
        //                         all_final_j.push(final_amt);
        //                 }
                        
        //         }

        // }
        // }


        // mark.tip_calculate();
        // john.tip_calculate();

        // console.log("mark",all_final_M);
        // console.log("marka",all_tips_M);

        // console.log("John",all_final_j);
        // console.log("John",all_tips_j);

        // mark_tip_average=get_average(all_tips_M);
        // john_tip_average=get_average(all_tips_j);

        // if(mark_tip_average > john_tip_average)
        // {
        // console.log("Mark family has highest tip average",mark_tip_average,john_tip_average);
        // }
        // else
        // {
        // console.log("Mark family has highest tip average",john_tip_average);

        // }


//Scope chain
                // var a="hello";
                // first();
                // function first()
                // {
                //         var b="Hii";
                //         second();
                //         console.log("Its first function");
                //         function second()
                //         {
                //                 third();
                //                 console.log("Its second function");
                //         }
                // }
                // function third()
                // {
                //         console.log(a+"John");
                // }

//This keyword
        // console.log(this);//windows object
        // let john={
        //         name:'John',
        //         year:1990,
        //         calage:function()
        //         {
        //                         console.log(this);
        //                         console.log(2020- this.year);

        //                         function innerFunction()
        //                         {
        //                                 console.log(this);
        //                         }
        //                         innerFunction();
        //         }
        // }
        // john.calage();

        // var mike=
        // {
        //         name:"mike",
        //         year:1997
        // }
//Method Borrowing

        // mike.calage=john.calage;
        // mike.calage();

//DOM manipulation
