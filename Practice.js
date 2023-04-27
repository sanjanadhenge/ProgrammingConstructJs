prompt = require("prompt-sync")();
const lower = parseInt(prompt('Enter Lower limit'));
const upper = parseInt(prompt('Enter Upper limit'));
var flag=0;
CheckPrime(lower,upper);
function CheckPrime(lower,upper)
{
    for(let i=lower;i<=upper;i++)
    {
        for(let j=2;j<=i/2;j++)
        {
            if(i%j==0)
            {
                flag = 1;
                break;
            }
            flag=0;
        }
        if(flag==0)
        {
            console.log("\n"+i);
        }
    }
}