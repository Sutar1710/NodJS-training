function myFunc1(p1,p2)
{
    console.log(p1+p2)

}
var result=myFunc1(10,20);

function myFunc2(...p1)
{
    var sum=0;
    for(let i=0;i<p1.length;i++)
    {
        sum+=p1[i];
    }
    console.log(sum);
}


const str ="English";
console.log(str.search);