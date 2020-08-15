function agecalculate(age)
{
    let res=0;
    year=2020-age

    for(let i=2020;i>year;i--)
    {
        if(i%4==0){
            res=res+366;
        }
        else{
            res=res+365;
        }
    }
    document.getElementById('cal').innerHTML=res;
}
function reset()
{
    console.log("calling");
    document.getElementById('cal').remove();
}